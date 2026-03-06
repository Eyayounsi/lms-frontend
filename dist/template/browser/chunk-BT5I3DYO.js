import {
  SafeUrlPipe
} from "./chunk-5AFZJH43.js";
import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/admin/admin-courses/admin-courses.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function AdminCoursesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_1_Template_button_click_3_listener() {
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
function AdminCoursesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_2_Template_button_click_3_listener() {
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
function AdminCoursesComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "h5", 48);
    \u0275\u0275text(3, "Aucun cours en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5, "Tous les cours ont \xE9t\xE9 trait\xE9s");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_32_div_3_div_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 71);
    \u0275\u0275text(8, "PROMO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 2, course_r5.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 5, course_r5.effectivePrice, "1.2-2"), " \u20AC");
  }
}
function AdminCoursesComponent_div_32_div_3_div_1_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, course_r5.price, "1.2-2"), " ");
  }
}
function AdminCoursesComponent_div_32_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "div", 53);
    \u0275\u0275element(4, "img", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "h5", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 57);
    \u0275\u0275element(9, "i", 58);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 57);
    \u0275\u0275element(12, "i", 59);
    \u0275\u0275text(13);
    \u0275\u0275template(14, AdminCoursesComponent_div_32_div_3_div_1_ng_container_14_Template, 9, 8, "ng-container", 60)(15, AdminCoursesComponent_div_32_div_3_div_1_ng_template_15_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 61);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 62)(21, "button", 63);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_32_div_3_div_1_Template_button_click_21_listener() {
      const course_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetail(course_r5));
    });
    \u0275\u0275element(22, "i", 64);
    \u0275\u0275text(23, "D\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 65);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_32_div_3_div_1_Template_button_click_24_listener() {
      const course_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approveCourse(course_r5));
    });
    \u0275\u0275element(25, "i", 66);
    \u0275\u0275text(26, "Approuver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 67);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_32_div_3_div_1_Template_button_click_27_listener() {
      const course_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRejectModal(course_r5));
    });
    \u0275\u0275element(28, "i", 68);
    \u0275\u0275text(29, "Rejeter ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const course_r5 = ctx.$implicit;
    const normalPricePending_r6 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getImageUrl(course_r5.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", course_r5.instructorName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getLevelLabel(course_r5.level), " \xA0|\xA0 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.onSale)("ngIfElse", normalPricePending_r6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (course_r5.description == null ? null : course_r5.description.length) > 120 ? \u0275\u0275pipeBind3(19, 7, course_r5.description, 0, 120) + "..." : course_r5.description, " ");
  }
}
function AdminCoursesComponent_div_32_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_32_div_3_div_1_Template, 30, 11, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pendingCourses);
  }
}
function AdminCoursesComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_32_div_1_Template, 4, 0, "div", 43)(2, AdminCoursesComponent_div_32_div_2_Template, 6, 0, "div", 43)(3, AdminCoursesComponent_div_32_div_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.pendingCourses.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.pendingCourses.length > 0);
  }
}
function AdminCoursesComponent_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 73);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Chargement des cours publi\xE9s...");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementStart(2, "h5", 48);
    \u0275\u0275text(3, "Aucun cours publi\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5, "Approuvez des cours pour les voir ici");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_33_div_3_div_1_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 71);
    \u0275\u0275text(8, "PROMO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const course_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 2, course_r8.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 5, course_r8.effectivePrice, "1.2-2"), " \u20AC");
  }
}
function AdminCoursesComponent_div_33_div_3_div_1_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
  }
  if (rf & 2) {
    const course_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, course_r8.price, "1.2-2"), " ");
  }
}
function AdminCoursesComponent_div_33_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 51)(2, "div", 52)(3, "div", 53);
    \u0275\u0275element(4, "img", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 77)(6, "div", 78)(7, "h5", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 79);
    \u0275\u0275text(10, "Publi\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 57);
    \u0275\u0275element(12, "i", 58);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 57);
    \u0275\u0275element(15, "i", 59);
    \u0275\u0275text(16);
    \u0275\u0275template(17, AdminCoursesComponent_div_33_div_3_div_1_ng_container_17_Template, 9, 8, "ng-container", 60)(18, AdminCoursesComponent_div_33_div_3_div_1_ng_template_18_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(20, " \xA0|\xA0 ");
    \u0275\u0275element(21, "i", 80);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 61);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 81)(27, "div", 82)(28, "button", 83);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_33_div_3_div_1_Template_button_click_28_listener() {
      const course_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetail(course_r8));
    });
    \u0275\u0275element(29, "i", 64);
    \u0275\u0275text(30, "Voir d\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 84);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_33_div_3_div_1_Template_button_click_31_listener() {
      const course_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPriceModal(course_r8));
    });
    \u0275\u0275element(32, "i", 72);
    \u0275\u0275text(33, "Modifier prix ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 85);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_33_div_3_div_1_Template_button_click_34_listener() {
      const course_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPromoModal(course_r8));
    });
    \u0275\u0275element(35, "i", 86);
    \u0275\u0275text(36, "Promotion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 87);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_33_div_3_div_1_Template_button_click_37_listener() {
      const course_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFeatured(course_r8));
    });
    \u0275\u0275element(38, "i", 88);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 89);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_33_div_3_div_1_Template_button_click_40_listener() {
      const course_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.adminArchive(course_r8));
    });
    \u0275\u0275element(41, "i", 90);
    \u0275\u0275text(42, "Archiver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 91);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_33_div_3_div_1_Template_button_click_43_listener() {
      const course_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(course_r8));
    });
    \u0275\u0275element(44, "i", 92);
    \u0275\u0275text(45, "Supprimer ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const course_r8 = ctx.$implicit;
    const normalPricePublished_r9 = \u0275\u0275reference(19);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getImageUrl(course_r8.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r8.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", course_r8.instructorName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getLevelLabel(course_r8.level), " \xA0|\xA0 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r8.onSale)("ngIfElse", normalPricePublished_r9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", course_r8.enrollmentCount || 0, " inscrit(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (course_r8.description == null ? null : course_r8.description.length) > 120 ? \u0275\u0275pipeBind3(25, 11, course_r8.description, 0, 120) + "..." : course_r8.description, " ");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngClass", course_r8.featured ? "btn-warning" : "btn-outline-secondary")("title", course_r8.featured ? "Retirer des mis en avant" : "Mettre en avant sur la page d'accueil");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", course_r8.featured ? "En vedette \u2605" : "Mettre en avant", " ");
  }
}
function AdminCoursesComponent_div_33_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_33_div_3_div_1_Template, 46, 15, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.publishedCourses);
  }
}
function AdminCoursesComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_33_div_1_Template, 4, 0, "div", 43)(2, AdminCoursesComponent_div_33_div_2_Template, 6, 0, "div", 43)(3, AdminCoursesComponent_div_33_div_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingPublished);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPublished && ctx_r1.publishedCourses.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPublished && ctx_r1.publishedCourses.length > 0);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 71);
    \u0275\u0275text(8, "PROMO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 2, ctx_r1.selectedCourse.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 5, ctx_r1.selectedCourse.effectivePrice, "1.2-2"), " \u20AC");
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(1, 1, ctx_r1.selectedCourse.price, "1.2-2"), " \u20AC");
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "p", 56)(2, "strong");
    \u0275\u0275text(3, "Objectifs :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 116);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.objectives);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275text(1, " Aucune section ajout\xE9e. ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 137);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 138);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 139);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275text(1, "Gratuit");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 141);
    \u0275\u0275element(1, "i", 142);
    \u0275\u0275text(2, "Vid\xE9o ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("href", ctx_r1.getFileUrl(lesson_r12.videoUrl), \u0275\u0275sanitizeUrl);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 143);
    \u0275\u0275element(1, "i", 144);
    \u0275\u0275text(2, "PDF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("href", ctx_r1.getFileUrl(lesson_r12.pdfUrl), \u0275\u0275sanitizeUrl);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_span_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 145);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_span_14_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const lesson_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openLessonPreview(lesson_r12));
    });
    \u0275\u0275element(1, "i", 146);
    \u0275\u0275text(2, "Article ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, "Aucun contenu");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div");
    \u0275\u0275template(2, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_i_2_Template, 1, 0, "i", 126)(3, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_i_3_Template, 1, 0, "i", 127)(4, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_i_4_Template, 1, 0, "i", 128);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275template(8, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_span_8_Template, 2, 0, "span", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 130)(10, "button", 131);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_Template_button_click_10_listener() {
      const lesson_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openLessonPreview(lesson_r12));
    });
    \u0275\u0275element(11, "i", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_a_12_Template, 3, 1, "a", 133)(13, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_a_13_Template, 3, 1, "a", 134)(14, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_span_14_Template, 3, 0, "span", 135)(15, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_span_15_Template, 2, 0, "span", 136);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r12 = ctx.$implicit;
    const j_r14 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lesson_r12.lessonType === "VIDEO" || !lesson_r12.lessonType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r12.lessonType === "TEXT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r12.lessonType === "PDF");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", j_r14 + 1, ".");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lesson_r12.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r12.free);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", lesson_r12.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r12.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r12.articleContent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lesson_r12.videoUrl && !lesson_r12.pdfUrl && !lesson_r12.articleContent);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "h2", 119)(2, "button", 120)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 121);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 122)(9, "div", 123);
    \u0275\u0275template(10, AdminCoursesComponent_div_34_div_8_div_1_div_39_div_10_Template, 16, 10, "div", 124);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("collapsed", i_r16 > 0);
    \u0275\u0275attribute("data-bs-target", "#adminSection" + section_r15.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Section ", i_r16 + 1, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA0", section_r15.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (section_r15.lessons == null ? null : section_r15.lessons.length) || 0, " le\xE7on(s)");
    \u0275\u0275advance();
    \u0275\u0275classProp("show", i_r16 === 0);
    \u0275\u0275property("id", "adminSection" + section_r15.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r15.lessons);
  }
}
function AdminCoursesComponent_div_34_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 106)(2, "div", 107);
    \u0275\u0275element(3, "img", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 109)(5, "p")(6, "strong");
    \u0275\u0275text(7, "Instructeur:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "Niveau:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Langue:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "strong");
    \u0275\u0275text(19, "Cat\xE9gorie:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p")(22, "strong");
    \u0275\u0275text(23, "Prix:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AdminCoursesComponent_div_34_div_8_div_1_ng_container_24_Template, 9, 8, "ng-container", 60)(25, AdminCoursesComponent_div_34_div_8_div_1_ng_template_25_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p")(28, "strong");
    \u0275\u0275text(29, "Description:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "p", 48);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, AdminCoursesComponent_div_34_div_8_div_1_div_32_Template, 6, 1, "div", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "hr");
    \u0275\u0275elementStart(34, "h6");
    \u0275\u0275element(35, "i", 111);
    \u0275\u0275text(36, "Contenu du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, AdminCoursesComponent_div_34_div_8_div_1_div_37_Template, 2, 0, "div", 112);
    \u0275\u0275elementStart(38, "div", 113);
    \u0275\u0275template(39, AdminCoursesComponent_div_34_div_8_div_1_div_39_Template, 11, 10, "div", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noPromo_r17 = \u0275\u0275reference(26);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.getImageUrl(ctx_r1.selectedCourse.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.instructorName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLevelLabel(ctx_r1.selectedCourse.level));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.language || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCourse.categoryName || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.onSale)("ngIfElse", noPromo_r17);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.objectives);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !(ctx_r1.selectedCourse.sections == null ? null : ctx_r1.selectedCourse.sections.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCourse.sections);
  }
}
function AdminCoursesComponent_div_34_div_8_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 148);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.modalReviews.length);
  }
}
function AdminCoursesComponent_div_34_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275element(1, "div", 150);
    \u0275\u0275elementStart(2, "span", 151);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_34_div_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275text(1, " Aucun avis pour ce cours. ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_34_div_8_div_9_div_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 161);
  }
  if (rf & 2) {
    const s_r19 = ctx.$implicit;
    const review_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(s_r19 <= review_r20.rating ? "fa fa-star text-warning" : "fa fa-star text-muted opacity-25");
  }
}
function AdminCoursesComponent_div_34_div_8_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 154)(1, "div")(2, "strong", 155);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 156);
    \u0275\u0275template(5, AdminCoursesComponent_div_34_div_8_div_9_div_1_i_5_Template, 1, 2, "i", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 158);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 159);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_div_8_div_9_div_1_Template_button_click_8_listener() {
      const review_r20 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteReviewAdmin(review_r20));
    });
    \u0275\u0275element(9, "i", 160);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r20 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r20.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r20.comment || "(Aucun commentaire)");
  }
}
function AdminCoursesComponent_div_34_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_34_div_8_div_9_div_1_Template, 10, 4, "div", 153);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.modalReviews);
  }
}
function AdminCoursesComponent_div_34_div_8_div_10_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 169);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r22 = ctx.$implicit;
    \u0275\u0275property("ngValue", cat_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r22.name);
  }
}
function AdminCoursesComponent_div_34_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 162)(2, "div", 109)(3, "label", 163);
    \u0275\u0275text(4, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 164);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_34_div_8_div_10_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.adminEditForm.title, $event) || (ctx_r1.adminEditForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 107)(7, "label", 163);
    \u0275\u0275text(8, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 165);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_34_div_8_div_10_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.adminEditForm.level, $event) || (ctx_r1.adminEditForm.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 166);
    \u0275\u0275text(11, "D\xE9butant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 167);
    \u0275\u0275text(13, "Interm\xE9diaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 168);
    \u0275\u0275text(15, "Avanc\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 55)(17, "label", 163);
    \u0275\u0275text(18, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 164);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_34_div_8_div_10_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.adminEditForm.language, $event) || (ctx_r1.adminEditForm.language = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 55)(21, "label", 163);
    \u0275\u0275text(22, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 165);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_34_div_8_div_10_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.adminEditForm.categoryId, $event) || (ctx_r1.adminEditForm.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 169);
    \u0275\u0275text(25, "-- Aucune --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AdminCoursesComponent_div_34_div_8_div_10_option_26_Template, 2, 2, "option", 170);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 171)(28, "label", 163);
    \u0275\u0275text(29, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "textarea", 172);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_34_div_8_div_10_Template_textarea_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.adminEditForm.description, $event) || (ctx_r1.adminEditForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 171)(32, "label", 163);
    \u0275\u0275text(33, "Objectifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 173);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_34_div_8_div_10_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.adminEditForm.objectives, $event) || (ctx_r1.adminEditForm.objectives = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 171)(36, "label", 163);
    \u0275\u0275text(37, "Pr\xE9requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "textarea", 174);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_34_div_8_div_10_Template_textarea_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.adminEditForm.requirements, $event) || (ctx_r1.adminEditForm.requirements = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminEditForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminEditForm.level);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminEditForm.language);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminEditForm.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminEditForm.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminEditForm.objectives);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminEditForm.requirements);
  }
}
function AdminCoursesComponent_div_34_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275template(1, AdminCoursesComponent_div_34_div_8_div_1_Template, 40, 11, "div", 21);
    \u0275\u0275element(2, "hr");
    \u0275\u0275elementStart(3, "h6");
    \u0275\u0275element(4, "i", 102);
    \u0275\u0275text(5, "Avis & \xC9valuations ");
    \u0275\u0275template(6, AdminCoursesComponent_div_34_div_8_span_6_Template, 2, 1, "span", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminCoursesComponent_div_34_div_8_div_7_Template, 4, 0, "div", 104)(8, AdminCoursesComponent_div_34_div_8_div_8_Template, 2, 0, "div", 105)(9, AdminCoursesComponent_div_34_div_8_div_9_Template, 2, 1, "div", 21)(10, AdminCoursesComponent_div_34_div_8_div_10_Template, 39, 9, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.adminEditMode);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.loadingReviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingReviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingReviews && ctx_r1.modalReviews.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingReviews && ctx_r1.modalReviews.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.adminEditMode);
  }
}
function AdminCoursesComponent_div_34_ng_container_10_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 180);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_ng_container_10_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approveCourse(ctx_r1.selectedCourse));
    });
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2, "Approuver ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_34_ng_container_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 181);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_ng_container_10_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.openRejectModal(ctx_r1.selectedCourse);
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, "Rejeter ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_34_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 175);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_ng_container_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAdminEdit());
    });
    \u0275\u0275element(2, "i", 176);
    \u0275\u0275text(3, "\xC9diter le cours ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminCoursesComponent_div_34_ng_container_10_button_4_Template, 3, 0, "button", 177)(5, AdminCoursesComponent_div_34_ng_container_10_button_5_Template, 3, 0, "button", 178);
    \u0275\u0275elementStart(6, "button", 179);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_ng_container_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275text(7, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.status) === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.status) === "PENDING");
  }
}
function AdminCoursesComponent_div_34_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 179);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_ng_container_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelAdminEdit());
    });
    \u0275\u0275text(2, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 180);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_ng_container_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveAdminEdit());
    });
    \u0275\u0275element(4, "i", 66);
    \u0275\u0275text(5, "Enregistrer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AdminCoursesComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "div", 95)(3, "div", 96)(4, "h5", 97);
    \u0275\u0275element(5, "i", 98);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminCoursesComponent_div_34_div_8_Template, 11, 6, "div", 99);
    \u0275\u0275elementStart(9, "div", 100);
    \u0275\u0275template(10, AdminCoursesComponent_div_34_ng_container_10_Template, 8, 2, "ng-container", 21)(11, AdminCoursesComponent_div_34_ng_container_11_Template, 6, 0, "ng-container", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.adminEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.adminEditMode);
  }
}
function AdminCoursesComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 182)(2, "div", 95)(3, "div", 183)(4, "h5", 97);
    \u0275\u0275element(5, "i", 184);
    \u0275\u0275text(6, "Rejeter le cours ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 185);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_35_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRejectModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 101)(9, "p");
    \u0275\u0275text(10, "Vous allez rejeter le cours : ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 186)(14, "label", 163);
    \u0275\u0275text(15, "Raison du rejet *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 187);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_35_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rejectionReason, $event) || (ctx_r1.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 147);
    \u0275\u0275element(18, "i", 188);
    \u0275\u0275text(19, " L'instructeur recevra un email avec cette raison et pourra modifier puis re-soumettre. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 100)(21, "button", 179);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_35_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRejectModal());
    });
    \u0275\u0275text(22, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 189);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_35_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmReject());
    });
    \u0275\u0275element(24, "i", 190);
    \u0275\u0275text(25, "Confirmer le rejet ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rejectionReason);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !ctx_r1.rejectionReason.trim());
  }
}
function AdminCoursesComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 191);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h5", 48);
    \u0275\u0275text(2, "Aucun cours");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_36_div_3_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 206);
    \u0275\u0275element(1, "i", 207);
    \u0275\u0275text(2, "Modif. en attente ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_36_div_3_div_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 71);
    \u0275\u0275text(8, "PROMO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const course_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 2, course_r29.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 5, course_r29.effectivePrice, "1.2-2"), " \u20AC");
  }
}
function AdminCoursesComponent_div_36_div_3_div_1_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const course_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(1, 1, course_r29.price, "1.2-2"), " \u20AC");
  }
}
function AdminCoursesComponent_div_36_div_3_div_1_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 208);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_36_div_3_div_1_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const course_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.adminArchive(course_r29));
    });
    \u0275\u0275element(1, "i", 209);
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_36_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 193)(1, "div", 194)(2, "div", 52)(3, "div", 53);
    \u0275\u0275element(4, "img", 195);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "div", 78)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 196);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminCoursesComponent_div_36_div_3_div_1_span_11_Template, 3, 0, "span", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 61);
    \u0275\u0275text(13);
    \u0275\u0275template(14, AdminCoursesComponent_div_36_div_3_div_1_ng_container_14_Template, 9, 8, "ng-container", 60)(15, AdminCoursesComponent_div_36_div_3_div_1_ng_template_15_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 198)(18, "button", 199);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_36_div_3_div_1_Template_button_click_18_listener() {
      const course_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPriceModal(course_r29));
    });
    \u0275\u0275element(19, "i", 200);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 201);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_36_div_3_div_1_Template_button_click_20_listener() {
      const course_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPromoModal(course_r29));
    });
    \u0275\u0275element(21, "i", 202);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 203);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_36_div_3_div_1_Template_button_click_22_listener() {
      const course_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFeatured(course_r29));
    });
    \u0275\u0275element(23, "i", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AdminCoursesComponent_div_36_div_3_div_1_button_24_Template, 2, 0, "button", 205);
    \u0275\u0275elementStart(25, "button", 67);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_36_div_3_div_1_Template_button_click_25_listener() {
      const course_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(course_r29));
    });
    \u0275\u0275element(26, "i", 160);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const course_r29 = ctx.$implicit;
    const normalPriceAll_r31 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getImageUrl(course_r29.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r29.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", course_r29.status === "PUBLISHED" ? "bg-success" : course_r29.status === "PENDING" ? "bg-warning text-dark" : course_r29.status === "DRAFT" ? "bg-secondary" : course_r29.status === "REJECTED" ? "bg-danger" : "bg-dark");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r29.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r29.hasPendingEdit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r29.instructorName, " \xA0|\xA0 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r29.onSale)("ngIfElse", normalPriceAll_r31);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", course_r29.featured ? "btn-warning" : "btn-outline-secondary")("title", course_r29.featured ? "Retirer des mis en avant" : "Mettre en avant");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", course_r29.status === "PUBLISHED");
  }
}
function AdminCoursesComponent_div_36_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_36_div_3_div_1_Template, 27, 11, "div", 192);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.allCourses);
  }
}
function AdminCoursesComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_36_div_1_Template, 4, 0, "div", 43)(2, AdminCoursesComponent_div_36_div_2_Template, 3, 0, "div", 43)(3, AdminCoursesComponent_div_36_div_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingAll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingAll && ctx_r1.allCourses.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingAll && ctx_r1.allCourses.length > 0);
  }
}
function AdminCoursesComponent_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 210);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "h5", 48);
    \u0275\u0275text(3, "Aucune modification en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5, "Toutes les modifications ont \xE9t\xE9 trait\xE9es");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 225);
    \u0275\u0275text(2, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 226);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r33 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r33.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r33.pendingEditData.title);
  }
}
function AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 225);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 226);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r33 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(5, 2, course_r33.description || "", 0, 80), "...");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(8, 6, course_r33.pendingEditData.description || "", 0, 80), "...");
  }
}
function AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 225);
    \u0275\u0275text(2, "Prix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 226);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r33 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, course_r33.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 5, course_r33.pendingEditData.price, "1.2-2"), " \u20AC");
  }
}
function AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 225);
    \u0275\u0275text(2, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 226);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r33 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getLevelLabel(course_r33.level));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getLevelLabel(course_r33.pendingEditData.level));
  }
}
function AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 225);
    \u0275\u0275text(2, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 226);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r33 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r33.language);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r33.pendingEditData.language);
  }
}
function AdminCoursesComponent_div_37_div_3_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 219)(1, "table", 220)(2, "thead", 221)(3, "tr")(4, "th", 222);
    \u0275\u0275text(5, "Champ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 223);
    \u0275\u0275text(7, "Valeur actuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 224);
    \u0275\u0275text(9, "Modification propos\xE9e");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_11_Template, 7, 2, "tr", 21)(12, AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_12_Template, 9, 10, "tr", 21)(13, AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_13_Template, 9, 8, "tr", 21)(14, AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_14_Template, 7, 2, "tr", 21)(15, AdminCoursesComponent_div_37_div_3_div_1_div_14_tr_15_Template, 7, 2, "tr", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", course_r33.pendingEditData.title && course_r33.pendingEditData.title !== course_r33.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r33.pendingEditData.description && course_r33.pendingEditData.description !== course_r33.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r33.pendingEditData.price != null && +course_r33.pendingEditData.price !== +course_r33.price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r33.pendingEditData.level && course_r33.pendingEditData.level !== course_r33.level);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r33.pendingEditData.language && course_r33.pendingEditData.language !== course_r33.language);
  }
}
function AdminCoursesComponent_div_37_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 212)(1, "div", 51)(2, "div", 213)(3, "div", 53);
    \u0275\u0275element(4, "img", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "div", 214)(7, "h5", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 206);
    \u0275\u0275text(10, "Modification en attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 215);
    \u0275\u0275element(12, "i", 58);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AdminCoursesComponent_div_37_div_3_div_1_div_14_Template, 16, 5, "div", 216);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 217)(16, "button", 218);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_37_div_3_div_1_Template_button_click_16_listener() {
      const course_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approvePendingEditAction(course_r33));
    });
    \u0275\u0275element(17, "i", 66);
    \u0275\u0275text(18, "Approuver la modification ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 91);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_37_div_3_div_1_Template_button_click_19_listener() {
      const course_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRejectEditModal(course_r33));
    });
    \u0275\u0275element(20, "i", 68);
    \u0275\u0275text(21, "Rejeter la modification ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 83);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_37_div_3_div_1_Template_button_click_22_listener() {
      const course_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetail(course_r33));
    });
    \u0275\u0275element(23, "i", 64);
    \u0275\u0275text(24, "Voir le cours complet ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const course_r33 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getImageUrl(course_r33.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r33.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", course_r33.instructorName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r33.pendingEditData);
  }
}
function AdminCoursesComponent_div_37_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_37_div_3_div_1_Template, 25, 4, "div", 211);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pendingEditsCourses);
  }
}
function AdminCoursesComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminCoursesComponent_div_37_div_1_Template, 4, 0, "div", 43)(2, AdminCoursesComponent_div_37_div_2_Template, 6, 0, "div", 43)(3, AdminCoursesComponent_div_37_div_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingPendingEdits);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPendingEdits && ctx_r1.pendingEditsCourses.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPendingEdits && ctx_r1.pendingEditsCourses.length > 0);
  }
}
function AdminCoursesComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 182)(2, "div", 95)(3, "div", 183)(4, "h5", 97);
    \u0275\u0275element(5, "i", 184);
    \u0275\u0275text(6, "Rejeter la modification ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 185);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRejectEditModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 101)(9, "p");
    \u0275\u0275text(10, "Rejeter la modification du cours : ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 186)(14, "label", 163);
    \u0275\u0275text(15, "Raison du rejet (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 227);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_38_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editRejectReason, $event) || (ctx_r1.editRejectReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 100)(18, "button", 179);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_38_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRejectEditModal());
    });
    \u0275\u0275text(19, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 181);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_38_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRejectEdit());
    });
    \u0275\u0275element(21, "i", 190);
    \u0275\u0275text(22, "Confirmer le rejet ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.editRejectCourse == null ? null : ctx_r1.editRejectCourse.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editRejectReason);
  }
}
function AdminCoursesComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 228)(2, "div", 95)(3, "div", 229)(4, "div", 230);
    \u0275\u0275element(5, "i", 231);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 232);
    \u0275\u0275text(7, "Supprimer le cours ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 233);
    \u0275\u0275text(9, " \xCAtes-vous s\xFBr de vouloir supprimer ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " ?");
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14, " Cette action est irr\xE9versible et supprime toutes les inscriptions et donn\xE9es associ\xE9es. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 234)(16, "button", 235);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_39_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(17, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 236);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_39_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmAdminDelete());
    });
    \u0275\u0275text(19, "Oui, supprimer");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.courseToDelete == null ? null : ctx_r1.courseToDelete.title);
  }
}
function AdminCoursesComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 228)(2, "div", 95)(3, "div", 237)(4, "h5", 97);
    \u0275\u0275element(5, "i", 238);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 185);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_40_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePriceModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 101)(9, "div", 186)(10, "label", 163);
    \u0275\u0275text(11, "Nouveau prix (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 239);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_40_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPrice, $event) || (ctx_r1.newPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 147);
    \u0275\u0275text(14, "Prix actuel : ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 100)(19, "button", 179);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_40_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePriceModal());
    });
    \u0275\u0275text(20, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 240);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_40_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePriceModal());
    });
    \u0275\u0275element(22, "i", 241);
    \u0275\u0275text(23, "Enregistrer ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Modifier le prix : ", ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.title, " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPrice);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 3, ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.price, "1.2-2"), " \u20AC");
  }
}
function AdminCoursesComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 228)(2, "div", 95)(3, "div", 242)(4, "h5", 97);
    \u0275\u0275element(5, "i", 243);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_41_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePromoModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 101)(9, "div", 186)(10, "label", 163);
    \u0275\u0275text(11, "Prix promotionnel (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 244);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_41_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.promoPrice, $event) || (ctx_r1.promoPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 186)(14, "label", 163);
    \u0275\u0275text(15, "Date de fin de promotion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 245);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCoursesComponent_div_41_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.promoEndsAt, $event) || (ctx_r1.promoEndsAt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 147);
    \u0275\u0275text(18, "Prix normal : ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 100)(23, "button", 179);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_41_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePromoModal());
    });
    \u0275\u0275text(24, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 246);
    \u0275\u0275listener("click", function AdminCoursesComponent_div_41_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePromoModal());
    });
    \u0275\u0275element(26, "i", 86);
    \u0275\u0275text(27, "Appliquer la promotion ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Promotion : ", ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.title, " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.promoPrice);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.promoEndsAt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 5, ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.promoPrice || !ctx_r1.promoEndsAt);
  }
}
function AdminCoursesComponent_div_55_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 252);
    \u0275\u0275element(1, "i", 142);
    \u0275\u0275text(2, "Vid\xE9o ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_55_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 253);
    \u0275\u0275element(1, "i", 144);
    \u0275\u0275text(2, "PDF ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_55_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 254);
    \u0275\u0275element(1, "i", 146);
    \u0275\u0275text(2, "Article ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_55_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 255);
    \u0275\u0275element(1, "i", 256);
    \u0275\u0275text(2, "Aucun contenu ");
    \u0275\u0275elementEnd();
  }
}
function AdminCoursesComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 247);
    \u0275\u0275template(1, AdminCoursesComponent_div_55_span_1_Template, 3, 0, "span", 248)(2, AdminCoursesComponent_div_55_span_2_Template, 3, 0, "span", 249)(3, AdminCoursesComponent_div_55_span_3_Template, 3, 0, "span", 250)(4, AdminCoursesComponent_div_55_span_4_Template, 3, 0, "span", 251);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.articleContent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previewLesson.videoUrl && !ctx_r1.previewLesson.pdfUrl && !ctx_r1.previewLesson.articleContent);
  }
}
function AdminCoursesComponent_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 260)(1, "div", 261)(2, "span", 262);
    \u0275\u0275element(3, "i", 263);
    \u0275\u0275text(4, "Vid\xE9o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 264);
    \u0275\u0275element(6, "i", 265);
    \u0275\u0275text(7, "Ouvrir dans un nouvel onglet ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 266);
    \u0275\u0275element(9, "video", 267);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r1.getFileUrl(ctx_r1.previewLesson.videoUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getFileUrl(ctx_r1.previewLesson.videoUrl), \u0275\u0275sanitizeUrl);
  }
}
function AdminCoursesComponent_div_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 260)(1, "div", 268)(2, "span", 269);
    \u0275\u0275element(3, "i", 270);
    \u0275\u0275text(4, "PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 271);
    \u0275\u0275element(6, "i", 265);
    \u0275\u0275text(7, "Ouvrir dans un nouvel onglet ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "iframe", 272);
    \u0275\u0275pipe(9, "safeUrl");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r1.getFileUrl(ctx_r1.previewLesson.pdfUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(9, 2, ctx_r1.getFileUrl(ctx_r1.previewLesson.pdfUrl)), \u0275\u0275sanitizeResourceUrl);
  }
}
function AdminCoursesComponent_div_56_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 273)(2, "span", 274);
    \u0275\u0275element(3, "i", 275);
    \u0275\u0275text(4, "Article ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 276);
    \u0275\u0275text(6, " \u2014 Les blocs de code disposent d'un bouton ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "Ex\xE9cuter");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " et ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "Copier");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(12, "div", 277);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("innerHTML", ctx_r1.previewLesson.articleContent, \u0275\u0275sanitizeHtml);
  }
}
function AdminCoursesComponent_div_56_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 278);
    \u0275\u0275element(1, "i", 279);
    \u0275\u0275elementStart(2, "p", 8);
    \u0275\u0275text(3, "Aucun contenu disponible pour cette le\xE7on.");
    \u0275\u0275elementEnd()();
  }
}
function AdminCoursesComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 257);
    \u0275\u0275template(1, AdminCoursesComponent_div_56_div_1_Template, 10, 2, "div", 258)(2, AdminCoursesComponent_div_56_div_2_Template, 10, 4, "div", 258)(3, AdminCoursesComponent_div_56_div_3_Template, 13, 1, "div", 21)(4, AdminCoursesComponent_div_56_div_4_Template, 4, 0, "div", 259);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.articleContent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previewLesson.videoUrl && !ctx_r1.previewLesson.pdfUrl && !ctx_r1.previewLesson.articleContent);
  }
}
var AdminCoursesComponent = class _AdminCoursesComponent {
  courseService;
  pendingCourses = [];
  publishedCourses = [];
  loading = true;
  loadingPublished = true;
  errorMessage = "";
  successMessage = "";
  // Onglet actif : 'pending' | 'published' | 'all' | 'pending-edits'
  activeTab = "pending";
  allCourses = [];
  loadingAll = true;
  // Modifications en attente
  pendingEditsCourses = [];
  loadingPendingEdits = true;
  // Modal détail
  selectedCourse = null;
  showDetailModal = false;
  // Modal rejet
  showRejectModal = false;
  rejectionReason = "";
  // Modal rejet modification
  showRejectEditModal = false;
  editRejectReason = "";
  editRejectCourse = null;
  // Modal prix
  showPriceModal = false;
  newPrice = 0;
  // Modal promotion
  showPromoModal = false;
  promoPrice = 0;
  promoEndsAt = "";
  // Confirm delete
  showDeleteModal = false;
  courseToDelete = null;
  // Admin edit mode (inline dans le modal détail)
  adminEditMode = false;
  adminEditForm = {};
  categories = [];
  // Reviews dans le modal
  modalReviews = [];
  loadingReviews = false;
  constructor(courseService) {
    this.courseService = courseService;
  }
  ngOnInit() {
    this.loadPendingCourses();
    this.loadPublishedCourses();
    this.loadAllCourses();
    this.loadPendingEditsCourses();
    this.courseService.getCategories().subscribe({
      next: (cats) => this.categories = cats,
      error: () => {
      }
    });
  }
  loadAllCourses() {
    this.loadingAll = true;
    this.courseService.getAllCoursesForAdmin().subscribe({
      next: (data) => {
        this.allCourses = data;
        this.loadingAll = false;
      },
      error: () => {
        this.loadingAll = false;
      }
    });
  }
  loadPendingEditsCourses() {
    this.loadingPendingEdits = true;
    this.courseService.getCoursesWithPendingEdits().subscribe({
      next: (data) => {
        this.pendingEditsCourses = data;
        this.loadingPendingEdits = false;
      },
      error: () => {
        this.loadingPendingEdits = false;
      }
    });
  }
  loadPendingCourses() {
    this.loading = true;
    this.courseService.getPendingCourses().subscribe({
      next: (data) => {
        this.pendingCourses = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Erreur lors du chargement des cours en attente";
        this.loading = false;
        console.error(err);
      }
    });
  }
  loadPublishedCourses() {
    this.loadingPublished = true;
    this.courseService.getPublishedCoursesForAdmin().subscribe({
      next: (data) => {
        this.publishedCourses = data;
        this.loadingPublished = false;
      },
      error: (err) => {
        console.error("Erreur chargement cours publi\xE9s", err);
        this.loadingPublished = false;
      }
    });
  }
  switchTab(tab) {
    this.activeTab = tab;
  }
  // Voir le détail
  openDetail(course) {
    this.courseService.getCourseForAdmin(course.id).subscribe({
      next: (data) => {
        this.selectedCourse = data;
        this.showDetailModal = true;
        this.modalReviews = [];
        this.loadModalReviews(data.id);
      },
      error: (err) => console.error(err)
    });
  }
  closeDetail() {
    this.showDetailModal = false;
    this.selectedCourse = null;
    this.adminEditMode = false;
    this.modalReviews = [];
  }
  loadModalReviews(courseId) {
    this.loadingReviews = true;
    this.courseService.getCourseReviews(courseId).subscribe({
      next: (data) => {
        this.modalReviews = data;
        this.loadingReviews = false;
      },
      error: () => {
        this.loadingReviews = false;
      }
    });
  }
  deleteReviewAdmin(review) {
    if (!confirm(`Supprimer l'avis de "${review.studentName}" ?`))
      return;
    this.courseService.adminDeleteReview(review.id).subscribe({
      next: () => {
        this.modalReviews = this.modalReviews.filter((r) => r.id !== review.id);
        this.showSuccess(`Avis de ${review.studentName} supprim\xE9.`);
      },
      error: (e) => this.errorMessage = e?.error?.message || "Erreur."
    });
  }
  // Approuver
  approveCourse(course) {
    if (confirm(`Approuver le cours "${course.title}" ? Il sera visible par tous les \xE9tudiants.`)) {
      this.courseService.reviewCourse(course.id, { action: "APPROVE" }).subscribe({
        next: () => {
          this.showSuccess("Cours approuv\xE9 avec succ\xE8s !");
          this.loadPendingCourses();
          this.closeDetail();
        },
        error: (err) => this.errorMessage = err.error?.message || "Erreur"
      });
    }
  }
  // Rejeter
  openRejectModal(course) {
    this.selectedCourse = course;
    this.showRejectModal = true;
    this.rejectionReason = "";
  }
  closeRejectModal() {
    this.showRejectModal = false;
    this.rejectionReason = "";
  }
  confirmReject() {
    if (!this.rejectionReason.trim()) {
      this.errorMessage = "Veuillez indiquer la raison du rejet";
      return;
    }
    this.courseService.reviewCourse(this.selectedCourse.id, {
      action: "REJECT",
      rejectionReason: this.rejectionReason
    }).subscribe({
      next: () => {
        this.showSuccess("Cours rejet\xE9");
        this.showRejectModal = false;
        this.closeDetail();
        this.loadPendingCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur"
    });
  }
  // Admin: Supprimer
  openDeleteModal(course) {
    this.courseToDelete = course;
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.courseToDelete = null;
    this.showDeleteModal = false;
  }
  confirmAdminDelete() {
    if (!this.courseToDelete)
      return;
    this.courseService.adminDeleteCourse(this.courseToDelete.id).subscribe({
      next: () => {
        this.showSuccess("Cours supprim\xE9");
        this.closeDeleteModal();
        this.loadPendingCourses();
        this.loadPublishedCourses();
        this.loadAllCourses();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur lors de la suppression";
        this.closeDeleteModal();
      }
    });
  }
  // Admin: Archiver
  adminArchive(course) {
    if (!confirm(`Archiver le cours "${course.title}" ?`))
      return;
    this.courseService.adminArchiveCourse(course.id).subscribe({
      next: () => {
        this.showSuccess("Cours archiv\xE9");
        this.loadPublishedCourses();
        this.loadAllCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors de l'archivage"
    });
  }
  // Admin: Modifier le prix
  openPriceModal(course) {
    this.selectedCourse = course;
    this.newPrice = course.price || 0;
    this.showPriceModal = true;
  }
  closePriceModal() {
    this.showPriceModal = false;
    this.newPrice = 0;
  }
  savePriceModal() {
    if (!this.selectedCourse)
      return;
    this.courseService.adminUpdatePrice(this.selectedCourse.id, this.newPrice).subscribe({
      next: () => {
        this.showSuccess("Prix mis \xE0 jour avec succ\xE8s !");
        this.closePriceModal();
        this.loadPublishedCourses();
        this.loadAllCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors de la mise \xE0 jour du prix"
    });
  }
  // Admin: Promotion
  openPromoModal(course) {
    this.selectedCourse = course;
    this.promoPrice = course.discountPrice || 0;
    this.promoEndsAt = "";
    this.showPromoModal = true;
  }
  closePromoModal() {
    this.showPromoModal = false;
    this.promoPrice = 0;
    this.promoEndsAt = "";
  }
  savePromoModal() {
    if (!this.selectedCourse)
      return;
    this.courseService.adminSetPromotion(this.selectedCourse.id, this.promoPrice, this.promoEndsAt).subscribe({
      next: () => {
        this.showSuccess("Promotion appliqu\xE9e !");
        this.closePromoModal();
        this.loadPublishedCourses();
        this.loadAllCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors de l'application de la promotion"
    });
  }
  // Utilitaires
  getLevelLabel(level) {
    switch (level) {
      case "BEGINNER":
        return "D\xE9butant";
      case "INTERMEDIATE":
        return "Interm\xE9diaire";
      case "ADVANCED":
        return "Avanc\xE9";
      default:
        return level;
    }
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  getFileUrl(path) {
    if (!path)
      return "#";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  // Aperçu contenu de leçon (admin)
  previewLesson = null;
  openLessonPreview(lesson) {
    this.previewLesson = lesson;
    setTimeout(() => {
      const el = document.getElementById("admin_lesson_preview");
      if (!el)
        return;
      let modal = window.bootstrap.Modal.getInstance(el);
      if (!modal) {
        modal = new window.bootstrap.Modal(el, { backdrop: false, keyboard: true });
      }
      el.addEventListener("shown.bs.modal", () => {
        const articleBody = el.querySelector(".article-preview-body");
        if (articleBody)
          this.initCodeBlocks(articleBody);
      }, { once: true });
      modal.show();
    }, 50);
  }
  /**
   * Scans for code blocks inside an article body and enhances them with
   * a dark toolbar (language badge, Copy, Exécuter).
   *
   * Targets (in priority order):
   *  1. <pre> / <pre><code> — standard + Quill (ql-syntax) + Prism (language-*)
   *  2. Standalone <code> not already inside a <pre>
   *  3. Smart fallback: if NONE of the above found but text looks like JS/HTML,
   *     wraps the entire article text in a runnable pseudo-block.
   */
  initCodeBlocks(container) {
    const preBlocks = Array.from(container.querySelectorAll("pre:not([data-cb-enhanced])"));
    preBlocks.forEach((pre) => this._enhanceBlock(pre, pre.querySelector("code") || pre));
    const codeBlocks = Array.from(container.querySelectorAll("code:not(pre code):not([data-cb-enhanced])"));
    codeBlocks.forEach((code) => {
      code.style.display = "block";
      this._enhanceBlock(code, code);
    });
    if (preBlocks.length === 0 && codeBlocks.length === 0) {
      const text = container.textContent || "";
      const CODE_HINTS = /console\.|function |=>|var |let |const |<script|<div|document\.|window\.|import |export /;
      if (CODE_HINTS.test(text)) {
        const banner = document.createElement("div");
        banner.setAttribute("data-cb-enhanced", "true");
        banner.style.cssText = "background:#2d2d2d;border:1px solid #3a3a3a;border-radius:6px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;";
        banner.innerHTML = '<span style="font-size:12px;color:#aaa;font-family:monospace;"><i class="fa-solid fa-triangle-exclamation" style="color:#ffb74d;margin-right:6px"></i>Aucun bloc de code formel d\xE9tect\xE9 \u2014 le texte semble contenir du code.</span>';
        const runAllBtn = document.createElement("button");
        runAllBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-right:4px"></i>Ex\xE9cuter le texte comme JS';
        runAllBtn.style.cssText = "font-size:11px;padding:4px 12px;border:1px solid #4caf50;background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;white-space:nowrap;flex-shrink:0;margin-left:12px;";
        runAllBtn.addEventListener("click", () => {
          let wrapper = container.querySelector(".cb-smart-wrapper");
          if (!wrapper) {
            wrapper = document.createElement("div");
            wrapper.className = "cb-smart-wrapper";
            container.appendChild(wrapper);
          }
          this.runCode(text, "js", wrapper);
        });
        banner.appendChild(runAllBtn);
        container.insertBefore(banner, container.firstChild);
      }
    }
  }
  /** Internal helper: injects the dark card around a single block element */
  _enhanceBlock(blockEl, codeEl) {
    blockEl.setAttribute("data-cb-enhanced", "true");
    const raw = codeEl.textContent || "";
    if (!raw.trim())
      return;
    const classStr = (codeEl.className || "") + " " + (blockEl.className || "");
    const langMatch = classStr.match(/language-(\w+)|lang-(\w+)/i);
    const lang = langMatch ? (langMatch[1] || langMatch[2]).toLowerCase() : "js";
    const isRunnable = true;
    const wrapper = document.createElement("div");
    wrapper.className = "cb-card mb-3 rounded overflow-hidden";
    wrapper.style.cssText = "border:1px solid #3a3a3a;";
    blockEl.parentNode?.insertBefore(wrapper, blockEl);
    wrapper.appendChild(blockEl);
    blockEl.style.cssText = "background:#1e1e1e;color:#d4d4d4;margin:0;padding:14px 16px;font-size:13px;line-height:1.65;overflow-x:auto;white-space:pre;font-family:monospace;";
    const bar = document.createElement("div");
    bar.style.cssText = "background:#2d2d2d;display:flex;justify-content:space-between;align-items:center;padding:5px 12px;gap:8px;";
    const langBadge = document.createElement("span");
    langBadge.textContent = lang.toUpperCase();
    langBadge.style.cssText = "font-size:10px;font-family:monospace;color:#aaa;letter-spacing:1px;";
    bar.appendChild(langBadge);
    const btnWrap = document.createElement("div");
    btnWrap.style.cssText = "display:flex;gap:6px;";
    if (isRunnable) {
      const runBtn = document.createElement("button");
      runBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-right:4px"></i>Ex\xE9cuter';
      runBtn.style.cssText = "font-size:11px;padding:3px 10px;border:1px solid #4caf50;background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;";
      runBtn.addEventListener("click", () => this.runCode(raw, lang, wrapper));
      btnWrap.appendChild(runBtn);
    }
    const copyBtn = document.createElement("button");
    copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
    copyBtn.style.cssText = "font-size:11px;padding:3px 10px;border:1px solid #888;background:transparent;color:#ccc;border-radius:4px;cursor:pointer;";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(raw).then(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-check" style="margin-right:4px"></i>Copi\xE9 !';
        copyBtn.style.color = "#4ec9b0";
        copyBtn.style.borderColor = "#4ec9b0";
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
          copyBtn.style.color = "#ccc";
          copyBtn.style.borderColor = "#888";
        }, 1800);
      }).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = raw;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        copyBtn.innerHTML = '<i class="fa-solid fa-check" style="margin-right:4px"></i>Copi\xE9 !';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
        }, 1800);
      });
    });
    btnWrap.appendChild(copyBtn);
    bar.appendChild(btnWrap);
    wrapper.insertBefore(bar, blockEl);
  }
  /**
   * Executes code inline:
   * - HTML → sandboxed <iframe srcdoc>
   * - JS/TS → new Function() with console capture
   */
  runCode(code, lang, wrapper) {
    wrapper.querySelector(".cb-runner")?.remove();
    const runner = document.createElement("div");
    runner.className = "cb-runner";
    runner.style.cssText = "border-top:1px solid #333;";
    const hdr = document.createElement("div");
    hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:4px 12px;background:#111;";
    const X = document.createElement("button");
    X.textContent = "\u2715";
    X.title = "Fermer";
    X.style.cssText = "background:none;border:none;color:#888;cursor:pointer;font-size:14px;line-height:1;";
    X.addEventListener("click", () => runner.remove());
    if (lang === "html") {
      hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-display" style="margin-right:6px;color:#64b5f6"></i>Rendu HTML</span>';
      hdr.appendChild(X);
      runner.appendChild(hdr);
      const frame = document.createElement("iframe");
      frame.srcdoc = code;
      frame.setAttribute("sandbox", "allow-scripts allow-same-origin");
      frame.style.cssText = "width:100%;height:300px;border:none;background:#fff;display:block;";
      runner.appendChild(frame);
    } else if (["js", "javascript", "ts", "typescript"].includes(lang)) {
      hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-terminal" style="margin-right:6px;color:#a5d6a7"></i>Console (natif)</span>';
      hdr.appendChild(X);
      runner.appendChild(hdr);
      const out = document.createElement("div");
      out.style.cssText = "background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;";
      const logs = [];
      const orig = { log: console.log, error: console.error, warn: console.warn };
      const esc = (x) => (typeof x === "object" ? JSON.stringify(x, null, 2) : String(x)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      console.log = (...a) => {
        orig.log(...a);
        logs.push(`<span style="color:#4ec9b0">${a.map(esc).join(" ")}</span>`);
      };
      console.error = (...a) => {
        orig.error(...a);
        logs.push(`<span style="color:#f44336">\u274C ${a.map(esc).join(" ")}</span>`);
      };
      console.warn = (...a) => {
        orig.warn(...a);
        logs.push(`<span style="color:#ffb74d">\u26A0\uFE0F ${a.map(esc).join(" ")}</span>`);
      };
      try {
        new Function(code)();
      } catch (e) {
        logs.push(`<span style="color:#f44336">\u274C ${esc(e.message)}</span>`);
      } finally {
        Object.assign(console, orig);
      }
      out.innerHTML = logs.length ? logs.join("<br>") : '<span style="color:#555">// Aucune sortie console</span>';
      runner.appendChild(out);
    } else {
      hdr.innerHTML = `<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-cloud" style="color:#64b5f6;margin-right:6px"></i>Piston \u2014 ${lang.toUpperCase()}</span>`;
      hdr.appendChild(X);
      runner.appendChild(hdr);
      const out = document.createElement("div");
      out.style.cssText = "background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;";
      runner.appendChild(out);
      this._runWithPiston(code, lang, out);
    }
    wrapper.appendChild(runner);
  }
  // ─── Piston integration ─────────────────────────────────────────────
  PISTON_LANGS = {
    python: ["python", "3.10.0"],
    py: ["python", "3.10.0"],
    java: ["java", "15.0.2"],
    c: ["c", "10.2.0"],
    cpp: ["c++", "10.2.0"],
    bash: ["bash", "5.1.0"],
    sh: ["bash", "5.1.0"],
    php: ["php", "8.0.0"],
    ruby: ["ruby", "3.0.0"],
    rb: ["ruby", "3.0.0"],
    rust: ["rust", "1.50.0"],
    rs: ["rust", "1.50.0"],
    go: ["go", "1.16.2"],
    kotlin: ["kotlin", "1.6.0"],
    kt: ["kotlin", "1.6.0"],
    swift: ["swift", "5.3.3"],
    csharp: ["csharp", "6.12.0"],
    cs: ["csharp", "6.12.0"],
    r: ["r", "4.1.1"],
    sql: ["sqlite3", "3.36.0"]
  };
  _runWithPiston(code, lang, out) {
    const mapping = this.PISTON_LANGS[lang];
    const html = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
    if (!mapping) {
      out.innerHTML = `<span style="color:#ffb74d">\u26A0\uFE0F Langage "${lang}" non configur\xE9 pour l'ex\xE9cution distante.</span>`;
      return;
    }
    const [pistonLang, pistonVer] = mapping;
    out.innerHTML = '<span style="color:#aaa"><i class="fa-solid fa-spinner fa-spin" style="margin-right:6px"></i>Ex\xE9cution via Piston\u2026</span>';
    fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: pistonLang,
        version: pistonVer,
        files: [{ content: code }]
      })
    }).then((r) => {
      if (!r.ok)
        throw new Error(`HTTP ${r.status}`);
      return r.json();
    }).then((res) => {
      const stdout = (res?.run?.stdout || "").trim();
      const stderr = (res?.run?.stderr || "").trim();
      const compile = (res?.compile?.stderr || "").trim();
      const parts = [];
      if (compile)
        parts.push(`<span style="color:#ff7043">\u2699\uFE0F Erreur de compilation :<br>${html(compile)}</span>`);
      if (stdout)
        parts.push(`<span style="color:#4ec9b0">${html(stdout)}</span>`);
      if (stderr)
        parts.push(`<span style="color:#f44336">\u274C ${html(stderr)}</span>`);
      if (!parts.length)
        parts.push('<span style="color:#555">// Aucune sortie</span>');
      out.innerHTML = parts.join("<br>");
    }).catch((e) => {
      out.innerHTML = `<span style="color:#f44336">\u274C Piston inaccessible : ${e.message}</span>`;
    });
  }
  // Admin: ouvrir le formulaire d'édition
  openAdminEdit() {
    if (!this.selectedCourse)
      return;
    this.adminEditMode = true;
    this.adminEditForm = {
      title: this.selectedCourse.title || "",
      description: this.selectedCourse.description || "",
      level: this.selectedCourse.level || "BEGINNER",
      language: this.selectedCourse.language || "Fran\xE7ais",
      objectives: this.selectedCourse.objectives || "",
      requirements: this.selectedCourse.requirements || "",
      categoryId: this.selectedCourse.categoryId || null
    };
  }
  cancelAdminEdit() {
    this.adminEditMode = false;
  }
  saveAdminEdit() {
    if (!this.selectedCourse)
      return;
    this.courseService.adminEditCourse(this.selectedCourse.id, this.adminEditForm).subscribe({
      next: (updated) => {
        this.showSuccess("Cours mis \xE0 jour !");
        this.selectedCourse = updated;
        this.adminEditMode = false;
        this.loadPendingCourses();
        this.loadPublishedCourses();
        this.loadAllCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors de la mise \xE0 jour"
    });
  }
  showSuccess(msg) {
    this.successMessage = msg;
    this.errorMessage = "";
    setTimeout(() => this.successMessage = "", 3e3);
  }
  toggleFeatured(course) {
    const newFeatured = !course.featured;
    this.courseService.toggleFeatured(course.id, newFeatured).subscribe({
      next: () => {
        course.featured = newFeatured;
        this.showSuccess(newFeatured ? `"${course.title}" mis en avant !` : `"${course.title}" retir\xE9 des mis en avant.`);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Impossible de modifier le featured.";
      }
    });
  }
  // ═══════════════════════════════════════════════════════════════════════
  //  PENDING EDITS — Approuver / Rejeter modifications
  // ═══════════════════════════════════════════════════════════════════════
  approvePendingEditAction(course) {
    if (!confirm(`Approuver les modifications du cours "${course.title}" ? Les changements seront visibles par les \xE9tudiants.`))
      return;
    this.courseService.approvePendingEdit(course.id).subscribe({
      next: () => {
        this.showSuccess("Modification approuv\xE9e !");
        this.loadPendingEditsCourses();
        this.loadPublishedCourses();
        this.loadAllCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors de l'approbation"
    });
  }
  openRejectEditModal(course) {
    this.editRejectCourse = course;
    this.editRejectReason = "";
    this.showRejectEditModal = true;
  }
  closeRejectEditModal() {
    this.showRejectEditModal = false;
    this.editRejectCourse = null;
    this.editRejectReason = "";
  }
  confirmRejectEdit() {
    if (!this.editRejectCourse)
      return;
    this.courseService.rejectPendingEdit(this.editRejectCourse.id, this.editRejectReason).subscribe({
      next: () => {
        this.showSuccess("Modification rejet\xE9e");
        this.closeRejectEditModal();
        this.loadPendingEditsCourses();
        this.loadAllCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors du rejet"
    });
  }
  static \u0275fac = function AdminCoursesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminCoursesComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCoursesComponent, selectors: [["app-admin-courses"]], decls: 61, vars: 27, consts: [["normalPricePending", ""], ["normalPricePublished", ""], ["noPromo", ""], ["normalPriceAll", ""], [1, "page-content"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0"], [1, "fa-solid", "fa-clipboard-check", "me-2", "text-warning"], [1, "nav", "nav-tabs", "mb-4"], [1, "nav-item"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-clock", "me-1", "text-warning"], [1, "badge", "bg-warning", "text-dark", "ms-1"], [1, "fa-solid", "fa-check-circle", "me-1", "text-success"], [1, "badge", "bg-success", "ms-1"], [1, "fa-solid", "fa-list", "me-1", "text-info"], [1, "badge", "bg-info", "ms-1"], [1, "fa-solid", "fa-pen-to-square", "me-1", "text-primary"], [1, "badge", "bg-primary", "ms-1"], [4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", "style", "background-color: rgba(0,0,0,0.5);", 4, "ngIf"], ["id", "admin_lesson_preview", "tabindex", "-1", "aria-modal", "true", "role", "dialog", 1, "modal", "fade", 2, "z-index", "1065"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content", 2, "border", "none", "border-radius", "12px", "overflow", "hidden"], [1, "modal-header", 2, "background", "linear-gradient(135deg,#1a1d2e 0%,#2d3250 100%)", "border-bottom", "none"], [1, "d-flex", "align-items-center", "gap-3"], [2, "width", "36px", "height", "36px", "border-radius", "8px", "background", "rgba(255,255,255,.12)", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "fa-solid", "fa-eye", "text-white"], [2, "font-size", "11px", "color", "rgba(255,255,255,.5)", "letter-spacing", "1px", "text-transform", "uppercase"], [1, "mb-0", "text-white", "fw-semibold", 2, "font-size", "16px"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Fermer", 1, "btn-close", "btn-close-white"], ["class", "px-3 pt-3 pb-2 d-flex gap-2 flex-wrap", "style", "background:#f8f9fa;border-bottom:1px solid #e9ecef;", 4, "ngIf"], ["class", "modal-body p-0", 4, "ngIf"], [1, "modal-footer", 2, "background", "#f8f9fa", "border-top", "1px solid #e9ecef"], ["data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm"], [1, "fa-solid", "fa-xmark", "me-1"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], ["class", "text-center py-5", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-warning"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-check-double", "fa-3x", "text-success", "mb-3"], [1, "text-muted"], ["class", "card mb-3 shadow-sm", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "shadow-sm"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-2"], ["alt", "cover", 1, "img-fluid", "rounded", 2, "height", "100px", "width", "100%", "object-fit", "cover", 3, "src"], [1, "col-md-6"], [1, "mb-1"], [1, "text-muted", "small", "mb-1"], [1, "fa-solid", "fa-user", "me-1"], [1, "fa-solid", "fa-signal", "me-1"], [4, "ngIf", "ngIfElse"], [1, "text-muted", "small", "mb-0"], [1, "col-md-4", "text-end"], [1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "click"], [1, "fa-solid", "fa-eye", "me-1"], [1, "btn", "btn-success", "btn-sm", "me-1", 3, "click"], [1, "fa-solid", "fa-check", "me-1"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fa-solid", "fa-times", "me-1"], [1, "text-decoration-line-through", "text-muted", "me-1"], [1, "text-danger", "fw-bold"], [1, "badge", "bg-danger", "ms-1"], [1, "fa-solid", "fa-euro-sign", "me-1"], ["role", "status", 1, "spinner-border", "text-success"], [1, "fa-solid", "fa-book-open", "fa-3x", "text-muted", "mb-3"], ["class", "card mb-3 shadow-sm border-success", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "shadow-sm", "border-success"], [1, "col-md-7"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "badge", "bg-success"], [1, "fa-solid", "fa-users", "me-1"], [1, "col-md-3", "text-end"], [1, "d-flex", "flex-column", "gap-1", "align-items-end"], [1, "btn", "btn-outline-primary", "btn-sm", "w-100", 3, "click"], [1, "btn", "btn-outline-info", "btn-sm", "w-100", 3, "click"], [1, "btn", "btn-outline-warning", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-tag", "me-1"], [1, "btn", "btn-sm", "w-100", 3, "click", "ngClass", "title"], [1, "fa-solid", "fa-star", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-archive", "me-1"], [1, "btn", "btn-danger", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-trash", "me-1"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "bg-warning"], [1, "modal-title"], [1, "fa-solid", "fa-book", "me-2"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "modal-body"], [1, "fa-solid", "fa-star", "me-2", "text-warning"], ["class", "badge bg-secondary ms-2 fw-normal", "style", "font-size:0.75rem", 4, "ngIf"], ["class", "text-center py-2", 4, "ngIf"], ["class", "text-muted small py-2", 4, "ngIf"], [1, "row", "mb-3"], [1, "col-md-4"], ["alt", "cover", 1, "img-fluid", "rounded", 3, "src"], [1, "col-md-8"], ["class", "mt-2", 4, "ngIf"], [1, "fa-solid", "fa-list", "me-2"], ["class", "text-muted py-2", 4, "ngIf"], ["id", "adminSectionsAccordion", 1, "accordion"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "text-muted", "small", 2, "white-space", "pre-line"], [1, "text-muted", "py-2"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", 1, "accordion-button"], [1, "badge", "bg-info", "ms-2"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "p-2"], ["class", "d-flex justify-content-between align-items-center p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "border-bottom"], ["class", "fa-solid fa-play-circle text-success me-2", 4, "ngIf"], ["class", "fa-solid fa-file-lines text-info me-2", 4, "ngIf"], ["class", "fa-solid fa-file-pdf text-danger me-2", 4, "ngIf"], ["class", "badge bg-success ms-2", 4, "ngIf"], [1, "d-flex", "gap-2", "align-items-center", "flex-wrap"], ["title", "Aper\xE7u du contenu", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "fa-solid", "fa-eye"], ["target", "_blank", "class", "btn btn-sm btn-outline-success", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "btn btn-sm btn-outline-danger", 3, "href", 4, "ngIf"], ["class", "badge bg-warning text-dark", "style", "cursor:pointer", "title", "Cliquer pour lire l'article", 3, "click", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [1, "fa-solid", "fa-play-circle", "text-success", "me-2"], [1, "fa-solid", "fa-file-lines", "text-info", "me-2"], [1, "fa-solid", "fa-file-pdf", "text-danger", "me-2"], [1, "badge", "bg-success", "ms-2"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-success", 3, "href"], [1, "fa-solid", "fa-video", "me-1"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-danger", 3, "href"], [1, "fa-solid", "fa-file-pdf", "me-1"], ["title", "Cliquer pour lire l'article", 1, "badge", "bg-warning", "text-dark", 2, "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-file-lines", "me-1"], [1, "text-muted", "small"], [1, "badge", "bg-secondary", "ms-2", "fw-normal", 2, "font-size", "0.75rem"], [1, "text-center", "py-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-warning"], [1, "ms-2", "text-muted", "small"], [1, "text-muted", "small", "py-2"], ["class", "d-flex align-items-start justify-content-between py-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-start", "justify-content-between", "py-2", "border-bottom"], [1, "small"], [1, "ms-2"], ["style", "font-size:11px;", 3, "class", 4, "ngFor", "ngForOf"], [1, "mb-0", "small", "text-muted", "mt-1"], ["title", "Supprimer cet avis", 1, "btn", "btn-sm", "btn-outline-danger", "ms-3", "flex-shrink-0", 3, "click"], [1, "fa-solid", "fa-trash"], [2, "font-size", "11px"], [1, "row", "g-3"], [1, "form-label"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "BEGINNER"], ["value", "INTERMEDIATE"], ["value", "ADVANCED"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-12"], ["rows", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Ce que les \xE9tudiants apprendront...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Ce que les \xE9tudiants doivent savoir avant...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-warning", "me-auto", 3, "click"], [1, "fa-solid", "fa-pen", "me-1"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "modal-dialog"], [1, "modal-header", "bg-danger", "text-white"], [1, "fa-solid", "fa-ban", "me-2"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "mb-3"], ["rows", "4", "placeholder", "Expliquez pourquoi le cours est rejet\xE9 (contenu insuffisant, qualit\xE9, etc.)", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fa-solid", "fa-info-circle", "me-1"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "fa-solid", "fa-ban", "me-1"], ["role", "status", 1, "spinner-border", "text-info"], ["class", "card mb-2 shadow-sm", 4, "ngFor", "ngForOf"], [1, "card", "mb-2", "shadow-sm"], [1, "card-body", "py-2"], ["alt", "", 1, "img-fluid", "rounded", 2, "height", "70px", "width", "100%", "object-fit", "cover", 3, "src"], [1, "badge", 3, "ngClass"], ["class", "badge bg-primary", 4, "ngIf"], [1, "col-md-4", "text-end", "d-flex", "gap-1", "justify-content-end", "flex-wrap"], [1, "btn", "btn-outline-info", "btn-sm", 3, "click"], [1, "fa-solid", "fa-euro-sign"], [1, "btn", "btn-outline-warning", "btn-sm", 3, "click"], [1, "fa-solid", "fa-tag"], [1, "btn", "btn-sm", 3, "click", "ngClass", "title"], [1, "fa-solid", "fa-star"], ["class", "btn btn-outline-secondary btn-sm", 3, "click", 4, "ngIf"], [1, "badge", "bg-primary"], [1, "fa-solid", "fa-pen-to-square", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fa-solid", "fa-archive"], ["role", "status", 1, "spinner-border", "text-primary"], ["class", "card mb-3 shadow-sm border-primary", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "shadow-sm", "border-primary"], [1, "row", "align-items-start"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "text-muted", "small", "mb-2"], ["class", "table-responsive", 4, "ngIf"], [1, "col-md-4", "text-end", "d-flex", "flex-column", "align-items-end", "gap-2"], [1, "btn", "btn-success", "btn-sm", "w-100", 3, "click"], [1, "table-responsive"], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "font-size", "0.82rem"], [1, "table-light"], [2, "width", "25%"], [2, "width", "37%"], [2, "width", "38%"], [1, "fw-bold"], [1, "text-primary", "fw-semibold"], ["rows", "3", "placeholder", "Expliquez pourquoi la modification est rejet\xE9e...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "py-4"], [1, "mb-3", 2, "width", "60px", "height", "60px", "background", "rgba(220,53,69,0.1)", "border-radius", "50%", "display", "inline-flex", "align-items", "center", "justify-content", "center"], [1, "fa-solid", "fa-trash", "fa-xl", "text-danger"], [1, "mb-2"], [1, "text-muted", "mb-4"], [1, "d-flex", "justify-content-center", "gap-2"], [1, "btn", "btn-light", "rounded-pill", "px-4", 3, "click"], [1, "btn", "btn-danger", "rounded-pill", "px-4", 3, "click"], [1, "modal-header", "bg-info", "text-white"], [1, "fa-solid", "fa-euro-sign", "me-2"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "Ex: 29.99", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-info", "text-white", 3, "click"], [1, "fa-solid", "fa-save", "me-1"], [1, "modal-header", "bg-warning", "text-dark"], [1, "fa-solid", "fa-tag", "me-2"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "Ex: 9.99", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-warning", 3, "click", "disabled"], [1, "px-3", "pt-3", "pb-2", "d-flex", "gap-2", "flex-wrap", 2, "background", "#f8f9fa", "border-bottom", "1px solid #e9ecef"], ["class", "badge rounded-pill bg-success px-3 py-2", 4, "ngIf"], ["class", "badge rounded-pill bg-danger px-3 py-2", 4, "ngIf"], ["class", "badge rounded-pill bg-warning text-dark px-3 py-2", 4, "ngIf"], ["class", "badge rounded-pill bg-secondary px-3 py-2", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-success", "px-3", "py-2"], [1, "badge", "rounded-pill", "bg-danger", "px-3", "py-2"], [1, "badge", "rounded-pill", "bg-warning", "text-dark", "px-3", "py-2"], [1, "badge", "rounded-pill", "bg-secondary", "px-3", "py-2"], [1, "fa-solid", "fa-circle-xmark", "me-1"], [1, "modal-body", "p-0"], ["class", "border-bottom", 4, "ngIf"], ["class", "text-center text-muted py-5", 4, "ngIf"], [1, "border-bottom"], [1, "d-flex", "justify-content-between", "align-items-center", "px-4", "py-2", 2, "background", "#e8f5e9"], [1, "fw-semibold", "text-success", 2, "font-size", "13px"], [1, "fa-solid", "fa-video", "me-2"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-success", 2, "font-size", "12px", 3, "href"], [1, "fa-solid", "fa-arrow-up-right-from-square", "me-1"], [2, "background", "#000"], ["controls", "", 1, "d-block", "mx-auto", 2, "max-height", "440px", "width", "100%", "outline", "none", 3, "src"], [1, "d-flex", "justify-content-between", "align-items-center", "px-4", "py-2", 2, "background", "#ffebee"], [1, "fw-semibold", "text-danger", 2, "font-size", "13px"], [1, "fa-solid", "fa-file-pdf", "me-2"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-danger", 2, "font-size", "12px", 3, "href"], [2, "width", "100%", "height", "540px", "border", "none", "display", "block", 3, "src"], [1, "d-flex", "align-items-center", "px-4", "py-2", 2, "background", "#fffde7"], [1, "fw-semibold", 2, "font-size", "13px", "color", "#f9a825"], [1, "fa-solid", "fa-file-lines", "me-2"], [1, "ms-2", "text-muted", 2, "font-size", "11px"], [1, "article-preview-body", "px-4", "py-4", 2, "font-size", "15px", "line-height", "1.9", "max-width", "900px", "margin", "0 auto", 3, "innerHTML"], [1, "text-center", "text-muted", "py-5"], [1, "fa-solid", "fa-folder-open", "fa-3x", "mb-3", "d-block", 2, "color", "#dee2e6"]], template: function AdminCoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4);
      \u0275\u0275template(1, AdminCoursesComponent_div_1_Template, 4, 1, "div", 5)(2, AdminCoursesComponent_div_2_Template, 4, 1, "div", 6);
      \u0275\u0275elementStart(3, "div", 7)(4, "h4", 8);
      \u0275\u0275element(5, "i", 9);
      \u0275\u0275text(6, " Gestion des Cours ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "ul", 10)(8, "li", 11)(9, "a", 12);
      \u0275\u0275listener("click", function AdminCoursesComponent_Template_a_click_9_listener() {
        return ctx.switchTab("pending");
      });
      \u0275\u0275element(10, "i", 13);
      \u0275\u0275text(11, "En attente ");
      \u0275\u0275elementStart(12, "span", 14);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "li", 11)(15, "a", 12);
      \u0275\u0275listener("click", function AdminCoursesComponent_Template_a_click_15_listener() {
        return ctx.switchTab("published");
      });
      \u0275\u0275element(16, "i", 15);
      \u0275\u0275text(17, "Publi\xE9s ");
      \u0275\u0275elementStart(18, "span", 16);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "li", 11)(21, "a", 12);
      \u0275\u0275listener("click", function AdminCoursesComponent_Template_a_click_21_listener() {
        return ctx.switchTab("all");
      });
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275text(23, "Tous les cours ");
      \u0275\u0275elementStart(24, "span", 18);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "li", 11)(27, "a", 12);
      \u0275\u0275listener("click", function AdminCoursesComponent_Template_a_click_27_listener() {
        return ctx.switchTab("pending-edits");
      });
      \u0275\u0275element(28, "i", 19);
      \u0275\u0275text(29, "Modifications en attente ");
      \u0275\u0275elementStart(30, "span", 20);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(32, AdminCoursesComponent_div_32_Template, 4, 3, "div", 21)(33, AdminCoursesComponent_div_33_Template, 4, 3, "div", 21)(34, AdminCoursesComponent_div_34_Template, 12, 4, "div", 22)(35, AdminCoursesComponent_div_35_Template, 26, 3, "div", 22)(36, AdminCoursesComponent_div_36_Template, 4, 3, "div", 21)(37, AdminCoursesComponent_div_37_Template, 4, 3, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, AdminCoursesComponent_div_38_Template, 23, 2, "div", 22)(39, AdminCoursesComponent_div_39_Template, 20, 1, "div", 22)(40, AdminCoursesComponent_div_40_Template, 24, 6, "div", 22)(41, AdminCoursesComponent_div_41_Template, 28, 8, "div", 22);
      \u0275\u0275elementStart(42, "div", 23)(43, "div", 24)(44, "div", 25)(45, "div", 26)(46, "div", 27)(47, "div", 28);
      \u0275\u0275element(48, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div")(50, "div", 30);
      \u0275\u0275text(51, "Aper\xE7u de le\xE7on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "h5", 31);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(54, "button", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, AdminCoursesComponent_div_55_Template, 5, 4, "div", 33)(56, AdminCoursesComponent_div_56_Template, 5, 4, "div", 34);
      \u0275\u0275elementStart(57, "div", 35)(58, "button", 36);
      \u0275\u0275element(59, "i", 37);
      \u0275\u0275text(60, "Fermer ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.activeTab === "pending");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.pendingCourses.length);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "published");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.publishedCourses.length);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "all");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.allCourses.length);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "pending-edits");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.pendingEditsCourses.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "pending");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "published");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRejectModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "all");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "pending-edits");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRejectEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPriceModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPromoModal);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.previewLesson == null ? null : ctx.previewLesson.title);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.previewLesson);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewLesson);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, SlicePipe, DecimalPipe, SafeUrlPipe], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.modal.show[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n/*# sourceMappingURL=admin-courses.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCoursesComponent, [{
    type: Component,
    args: [{ selector: "app-admin-courses", standalone: true, imports: [CommonModule, FormsModule, SafeUrlPipe], template: `<div class="page-content">\r
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
        <!-- Header + Onglets -->\r
        <div class="d-flex justify-content-between align-items-center mb-4">\r
          <h4 class="mb-0">\r
            <i class="fa-solid fa-clipboard-check me-2 text-warning"></i>\r
            Gestion des Cours\r
          </h4>\r
        </div>\r
\r
        <!-- Onglets -->\r
        <ul class="nav nav-tabs mb-4">\r
          <li class="nav-item">\r
            <a class="nav-link" [class.active]="activeTab === 'pending'" (click)="switchTab('pending')" style="cursor:pointer">\r
              <i class="fa-solid fa-clock me-1 text-warning"></i>En attente\r
              <span class="badge bg-warning text-dark ms-1">{{ pendingCourses.length }}</span>\r
            </a>\r
          </li>\r
          <li class="nav-item">\r
            <a class="nav-link" [class.active]="activeTab === 'published'" (click)="switchTab('published')" style="cursor:pointer">\r
              <i class="fa-solid fa-check-circle me-1 text-success"></i>Publi\xE9s\r
              <span class="badge bg-success ms-1">{{ publishedCourses.length }}</span>\r
            </a>\r
          </li>\r
          <li class="nav-item">\r
            <a class="nav-link" [class.active]="activeTab === 'all'" (click)="switchTab('all')" style="cursor:pointer">\r
              <i class="fa-solid fa-list me-1 text-info"></i>Tous les cours\r
              <span class="badge bg-info ms-1">{{ allCourses.length }}</span>\r
            </a>\r
          </li>\r
          <li class="nav-item">\r
            <a class="nav-link" [class.active]="activeTab === 'pending-edits'" (click)="switchTab('pending-edits')" style="cursor:pointer">\r
              <i class="fa-solid fa-pen-to-square me-1 text-primary"></i>Modifications en attente\r
              <span class="badge bg-primary ms-1">{{ pendingEditsCourses.length }}</span>\r
            </a>\r
          </li>\r
        </ul>\r
\r
        <!-- \u2550\u2550 ONGLET EN ATTENTE \u2550\u2550 -->\r
        <div *ngIf="activeTab === 'pending'">\r
          <!-- Loading -->\r
          <div *ngIf="loading" class="text-center py-5">\r
            <div class="spinner-border text-warning" role="status"></div>\r
            <p class="mt-2 text-muted">Chargement...</p>\r
          </div>\r
\r
          <!-- Aucun cours -->\r
          <div *ngIf="!loading && pendingCourses.length === 0" class="text-center py-5">\r
            <i class="fa-solid fa-check-double fa-3x text-success mb-3"></i>\r
            <h5 class="text-muted">Aucun cours en attente</h5>\r
            <p class="text-muted">Tous les cours ont \xE9t\xE9 trait\xE9s</p>\r
          </div>\r
\r
          <!-- Liste des cours en attente -->\r
          <div *ngIf="!loading && pendingCourses.length > 0">\r
            <div class="card mb-3 shadow-sm" *ngFor="let course of pendingCourses">\r
              <div class="card-body">\r
                <div class="row align-items-center">\r
                  <!-- Image -->\r
                  <div class="col-md-2">\r
                    <img [src]="getImageUrl(course.coverImage)" class="img-fluid rounded" \r
                         style="height: 100px; width: 100%; object-fit: cover;" alt="cover">\r
                  </div>\r
                  <!-- Info -->\r
                  <div class="col-md-6">\r
                    <h5 class="mb-1">{{ course.title }}</h5>\r
                    <p class="text-muted small mb-1">\r
                      <i class="fa-solid fa-user me-1"></i>{{ course.instructorName }}\r
                    </p>\r
                    <p class="text-muted small mb-1">\r
                      <i class="fa-solid fa-signal me-1"></i>{{ getLevelLabel(course.level) }}\r
                      &nbsp;|&nbsp;\r
                      <ng-container *ngIf="course.onSale; else normalPricePending">\r
                        <span class="text-decoration-line-through text-muted me-1">{{ course.price | number:'1.2-2' }} \u20AC</span>\r
                        <span class="text-danger fw-bold">{{ course.effectivePrice | number:'1.2-2' }} \u20AC</span>\r
                        <span class="badge bg-danger ms-1">PROMO</span>\r
                      </ng-container>\r
                      <ng-template #normalPricePending>\r
                        <i class="fa-solid fa-euro-sign me-1"></i>{{ course.price | number:'1.2-2' }}\r
                      </ng-template>\r
                    </p>\r
                    <p class="text-muted small mb-0">\r
                      {{ course.description?.length > 120 ? (course.description | slice:0:120) + '...' : course.description }}\r
                    </p>\r
                  </div>\r
                  <!-- Actions -->\r
                  <div class="col-md-4 text-end">\r
                    <button class="btn btn-outline-primary btn-sm me-1" (click)="openDetail(course)">\r
                      <i class="fa-solid fa-eye me-1"></i>D\xE9tails\r
                    </button>\r
                    <button class="btn btn-success btn-sm me-1" (click)="approveCourse(course)">\r
                      <i class="fa-solid fa-check me-1"></i>Approuver\r
                    </button>\r
                    <button class="btn btn-danger btn-sm" (click)="openRejectModal(course)">\r
                      <i class="fa-solid fa-times me-1"></i>Rejeter\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550 ONGLET PUBLI\xC9S \u2550\u2550 -->\r
        <div *ngIf="activeTab === 'published'">\r
          <!-- Loading -->\r
          <div *ngIf="loadingPublished" class="text-center py-5">\r
            <div class="spinner-border text-success" role="status"></div>\r
            <p class="mt-2 text-muted">Chargement des cours publi\xE9s...</p>\r
          </div>\r
\r
          <!-- Aucun cours publi\xE9 -->\r
          <div *ngIf="!loadingPublished && publishedCourses.length === 0" class="text-center py-5">\r
            <i class="fa-solid fa-book-open fa-3x text-muted mb-3"></i>\r
            <h5 class="text-muted">Aucun cours publi\xE9</h5>\r
            <p class="text-muted">Approuvez des cours pour les voir ici</p>\r
          </div>\r
\r
          <!-- Liste des cours publi\xE9s -->\r
          <div *ngIf="!loadingPublished && publishedCourses.length > 0">\r
            <div class="card mb-3 shadow-sm border-success" *ngFor="let course of publishedCourses">\r
              <div class="card-body">\r
                <div class="row align-items-center">\r
                  <!-- Image -->\r
                  <div class="col-md-2">\r
                    <img [src]="getImageUrl(course.coverImage)" class="img-fluid rounded" \r
                         style="height: 100px; width: 100%; object-fit: cover;" alt="cover">\r
                  </div>\r
                  <!-- Info -->\r
                  <div class="col-md-7">\r
                    <div class="d-flex align-items-center gap-2 mb-1">\r
                      <h5 class="mb-0">{{ course.title }}</h5>\r
                      <span class="badge bg-success">Publi\xE9</span>\r
                    </div>\r
                    <p class="text-muted small mb-1">\r
                      <i class="fa-solid fa-user me-1"></i>{{ course.instructorName }}\r
                    </p>\r
                    <p class="text-muted small mb-1">\r
                      <i class="fa-solid fa-signal me-1"></i>{{ getLevelLabel(course.level) }}\r
                      &nbsp;|&nbsp;\r
                      <ng-container *ngIf="course.onSale; else normalPricePublished">\r
                        <span class="text-decoration-line-through text-muted me-1">{{ course.price | number:'1.2-2' }} \u20AC</span>\r
                        <span class="text-danger fw-bold">{{ course.effectivePrice | number:'1.2-2' }} \u20AC</span>\r
                        <span class="badge bg-danger ms-1">PROMO</span>\r
                      </ng-container>\r
                      <ng-template #normalPricePublished>\r
                        <i class="fa-solid fa-euro-sign me-1"></i>{{ course.price | number:'1.2-2' }}\r
                      </ng-template>\r
                      &nbsp;|&nbsp;\r
                      <i class="fa-solid fa-users me-1"></i>{{ course.enrollmentCount || 0 }} inscrit(s)\r
                    </p>\r
                    <p class="text-muted small mb-0">\r
                      {{ course.description?.length > 120 ? (course.description | slice:0:120) + '...' : course.description }}\r
                    </p>\r
                  </div>\r
                    <!-- Actions (published tab) -->\r
                  <div class="col-md-3 text-end">\r
                    <div class="d-flex flex-column gap-1 align-items-end">\r
                      <button class="btn btn-outline-primary btn-sm w-100" (click)="openDetail(course)">\r
                        <i class="fa-solid fa-eye me-1"></i>Voir d\xE9tails\r
                      </button>\r
                      <button class="btn btn-outline-info btn-sm w-100" (click)="openPriceModal(course)">\r
                        <i class="fa-solid fa-euro-sign me-1"></i>Modifier prix\r
                      </button>\r
                      <button class="btn btn-outline-warning btn-sm w-100" (click)="openPromoModal(course)">\r
                        <i class="fa-solid fa-tag me-1"></i>Promotion\r
                      </button>\r
                      <button class="btn btn-sm w-100"\r
                              [ngClass]="course.featured ? 'btn-warning' : 'btn-outline-secondary'"\r
                              (click)="toggleFeatured(course)"\r
                              [title]="course.featured ? 'Retirer des mis en avant' : 'Mettre en avant sur la page d\\'accueil'">\r
                        <i class="fa-solid fa-star me-1"></i>{{ course.featured ? 'En vedette \u2605' : 'Mettre en avant' }}\r
                      </button>\r
                      <button class="btn btn-outline-secondary btn-sm w-100" (click)="adminArchive(course)">\r
                        <i class="fa-solid fa-archive me-1"></i>Archiver\r
                      </button>\r
                      <button class="btn btn-danger btn-sm w-100" (click)="openDeleteModal(course)">\r
                        <i class="fa-solid fa-trash me-1"></i>Supprimer\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!--  MODAL D\xC9TAIL                      -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div *ngIf="showDetailModal" class="modal fade show d-block" tabindex="-1"\r
             style="background-color: rgba(0,0,0,0.5);">\r
          <div class="modal-dialog modal-xl modal-dialog-scrollable">\r
            <div class="modal-content">\r
              <div class="modal-header bg-warning">\r
                <h5 class="modal-title">\r
                  <i class="fa-solid fa-book me-2"></i>{{ selectedCourse?.title }}\r
                </h5>\r
                <button type="button" class="btn-close" (click)="closeDetail()"></button>\r
              </div>\r
              <div class="modal-body" *ngIf="selectedCourse">\r
\r
                <!-- \u2500\u2500 Vue normale (non-\xE9dition) \u2500\u2500 -->\r
                <div *ngIf="!adminEditMode">\r
                  <div class="row mb-3">\r
                    <div class="col-md-4">\r
                      <img [src]="getImageUrl(selectedCourse.coverImage)" class="img-fluid rounded" alt="cover">\r
                    </div>\r
                    <div class="col-md-8">\r
                      <p><strong>Instructeur:</strong> {{ selectedCourse.instructorName }}</p>\r
                      <p><strong>Niveau:</strong> {{ getLevelLabel(selectedCourse.level) }}</p>\r
                      <p><strong>Langue:</strong> {{ selectedCourse.language || '-' }}</p>\r
                      <p><strong>Cat\xE9gorie:</strong> {{ selectedCourse.categoryName || '-' }}</p>\r
                      <p>\r
                        <strong>Prix:</strong>\r
                        <ng-container *ngIf="selectedCourse.onSale; else noPromo">\r
                          <span class="text-decoration-line-through text-muted me-1">{{ selectedCourse.price | number:'1.2-2' }} \u20AC</span>\r
                          <span class="text-danger fw-bold">{{ selectedCourse.effectivePrice | number:'1.2-2' }} \u20AC</span>\r
                          <span class="badge bg-danger ms-1">PROMO</span>\r
                        </ng-container>\r
                        <ng-template #noPromo>{{ selectedCourse.price | number:'1.2-2' }} \u20AC</ng-template>\r
                      </p>\r
                      <p><strong>Description:</strong></p>\r
                      <p class="text-muted">{{ selectedCourse.description }}</p>\r
                      <div *ngIf="selectedCourse.objectives" class="mt-2">\r
                        <p class="mb-1"><strong>Objectifs :</strong></p>\r
                        <p class="text-muted small" style="white-space: pre-line">{{ selectedCourse.objectives }}</p>\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <hr>\r
                  <h6><i class="fa-solid fa-list me-2"></i>Contenu du cours</h6>\r
\r
                  <div *ngIf="!selectedCourse.sections?.length" class="text-muted py-2">\r
                    Aucune section ajout\xE9e.\r
                  </div>\r
\r
                  <div class="accordion" id="adminSectionsAccordion">\r
                    <div class="accordion-item" *ngFor="let section of selectedCourse.sections; let i = index">\r
                      <h2 class="accordion-header">\r
                        <button class="accordion-button" [class.collapsed]="i > 0" type="button"\r
                                data-bs-toggle="collapse" [attr.data-bs-target]="'#adminSection' + section.id">\r
                          <strong>Section {{ i+1 }}:</strong>&nbsp;{{ section.title }}\r
                          <span class="badge bg-info ms-2">{{ section.lessons?.length || 0 }} le\xE7on(s)</span>\r
                        </button>\r
                      </h2>\r
                      <div [id]="'adminSection' + section.id" class="accordion-collapse collapse" [class.show]="i === 0">\r
                        <div class="accordion-body p-2">\r
                          <div *ngFor="let lesson of section.lessons; let j = index"\r
                               class="d-flex justify-content-between align-items-center p-2 border-bottom">\r
                            <div>\r
                              <!-- Ic\xF4ne selon type de le\xE7on -->\r
                              <i class="fa-solid fa-play-circle text-success me-2"\r
                                 *ngIf="lesson.lessonType === 'VIDEO' || !lesson.lessonType"></i>\r
                              <i class="fa-solid fa-file-lines text-info me-2"\r
                                 *ngIf="lesson.lessonType === 'TEXT'"></i>\r
                              <i class="fa-solid fa-file-pdf text-danger me-2"\r
                                 *ngIf="lesson.lessonType === 'PDF'"></i>\r
                              <strong>{{ j+1 }}.</strong> {{ lesson.title }}\r
                              <span *ngIf="lesson.free" class="badge bg-success ms-2">Gratuit</span>\r
                            </div>\r
                            <div class="d-flex gap-2 align-items-center flex-wrap">\r
                              <!-- Aper\xE7u unifi\xE9 (ouvre la modale) -->\r
                              <button class="btn btn-sm btn-outline-secondary" title="Aper\xE7u du contenu"\r
                                      (click)="openLessonPreview(lesson)">\r
                                <i class="fa-solid fa-eye"></i>\r
                              </button>\r
                              <a *ngIf="lesson.videoUrl" [href]="getFileUrl(lesson.videoUrl)" target="_blank"\r
                                 class="btn btn-sm btn-outline-success">\r
                                <i class="fa-solid fa-video me-1"></i>Vid\xE9o\r
                              </a>\r
                              <a *ngIf="lesson.pdfUrl" [href]="getFileUrl(lesson.pdfUrl)" target="_blank"\r
                                 class="btn btn-sm btn-outline-danger">\r
                                <i class="fa-solid fa-file-pdf me-1"></i>PDF\r
                              </a>\r
                              <span *ngIf="lesson.articleContent"\r
                                    class="badge bg-warning text-dark" style="cursor:pointer"\r
                                    (click)="openLessonPreview(lesson)"\r
                                    title="Cliquer pour lire l'article">\r
                                <i class="fa-solid fa-file-lines me-1"></i>Article\r
                              </span>\r
                              <!-- Aucun contenu seulement si vraiment rien -->\r
                              <span *ngIf="!lesson.videoUrl && !lesson.pdfUrl && !lesson.articleContent"\r
                                    class="text-muted small">Aucun contenu</span>\r
                            </div>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- \u2500\u2500 Avis & \xC9valuations (mod\xE9ration admin) \u2500\u2500 -->\r
                <hr>\r
                <h6><i class="fa-solid fa-star me-2 text-warning"></i>Avis &amp; \xC9valuations\r
                  <span *ngIf="!loadingReviews" class="badge bg-secondary ms-2 fw-normal" style="font-size:0.75rem">{{ modalReviews.length }}</span>\r
                </h6>\r
                <div *ngIf="loadingReviews" class="text-center py-2">\r
                  <div class="spinner-border spinner-border-sm text-warning" role="status"></div>\r
                  <span class="ms-2 text-muted small">Chargement...</span>\r
                </div>\r
                <div *ngIf="!loadingReviews && modalReviews.length === 0" class="text-muted small py-2">\r
                  Aucun avis pour ce cours.\r
                </div>\r
                <div *ngIf="!loadingReviews && modalReviews.length > 0">\r
                  <div class="d-flex align-items-start justify-content-between py-2 border-bottom"\r
                       *ngFor="let review of modalReviews">\r
                    <div>\r
                      <strong class="small">{{ review.studentName }}</strong>\r
                      <span class="ms-2">\r
                        <i *ngFor="let s of [1,2,3,4,5]"\r
                           [class]="s <= review.rating ? 'fa fa-star text-warning' : 'fa fa-star text-muted opacity-25'"\r
                           style="font-size:11px;"></i>\r
                      </span>\r
                      <p class="mb-0 small text-muted mt-1">{{ review.comment || '(Aucun commentaire)' }}</p>\r
                    </div>\r
                    <button class="btn btn-sm btn-outline-danger ms-3 flex-shrink-0"\r
                            (click)="deleteReviewAdmin(review)"\r
                            title="Supprimer cet avis">\r
                      <i class="fa-solid fa-trash"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
\r
                <!-- \u2500\u2500 Formulaire d'\xE9dition admin \u2500\u2500 -->\r
                <div *ngIf="adminEditMode">\r
                  <div class="row g-3">\r
                    <div class="col-md-8">\r
                      <label class="form-label">Titre</label>\r
                      <input type="text" class="form-control" [(ngModel)]="adminEditForm.title">\r
                    </div>\r
                    <div class="col-md-4">\r
                      <label class="form-label">Niveau</label>\r
                      <select class="form-select" [(ngModel)]="adminEditForm.level">\r
                        <option value="BEGINNER">D\xE9butant</option>\r
                        <option value="INTERMEDIATE">Interm\xE9diaire</option>\r
                        <option value="ADVANCED">Avanc\xE9</option>\r
                      </select>\r
                    </div>\r
                    <div class="col-md-6">\r
                      <label class="form-label">Langue</label>\r
                      <input type="text" class="form-control" [(ngModel)]="adminEditForm.language">\r
                    </div>\r
                    <div class="col-md-6">\r
                      <label class="form-label">Cat\xE9gorie</label>\r
                      <select class="form-select" [(ngModel)]="adminEditForm.categoryId">\r
                        <option [ngValue]="null">-- Aucune --</option>\r
                        <option *ngFor="let cat of categories" [ngValue]="cat.id">{{ cat.name }}</option>\r
                      </select>\r
                    </div>\r
                    <div class="col-12">\r
                      <label class="form-label">Description</label>\r
                      <textarea class="form-control" rows="4" [(ngModel)]="adminEditForm.description"></textarea>\r
                    </div>\r
                    <div class="col-12">\r
                      <label class="form-label">Objectifs</label>\r
                      <textarea class="form-control" rows="3" [(ngModel)]="adminEditForm.objectives"\r
                                placeholder="Ce que les \xE9tudiants apprendront..."></textarea>\r
                    </div>\r
                    <div class="col-12">\r
                      <label class="form-label">Pr\xE9requis</label>\r
                      <textarea class="form-control" rows="3" [(ngModel)]="adminEditForm.requirements"\r
                                placeholder="Ce que les \xE9tudiants doivent savoir avant..."></textarea>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
              </div>\r
              <div class="modal-footer">\r
                <ng-container *ngIf="!adminEditMode">\r
                  <button class="btn btn-warning me-auto" (click)="openAdminEdit()">\r
                    <i class="fa-solid fa-pen me-1"></i>\xC9diter le cours\r
                  </button>\r
                  <button *ngIf="selectedCourse?.status === 'PENDING'" class="btn btn-success"\r
                          (click)="approveCourse(selectedCourse)">\r
                    <i class="fa-solid fa-check me-1"></i>Approuver\r
                  </button>\r
                  <button *ngIf="selectedCourse?.status === 'PENDING'" class="btn btn-danger"\r
                          (click)="openRejectModal(selectedCourse); closeDetail()">\r
                    <i class="fa-solid fa-times me-1"></i>Rejeter\r
                  </button>\r
                  <button class="btn btn-secondary" (click)="closeDetail()">Fermer</button>\r
                </ng-container>\r
                <ng-container *ngIf="adminEditMode">\r
                  <button class="btn btn-secondary" (click)="cancelAdminEdit()">Annuler</button>\r
                  <button class="btn btn-success" (click)="saveAdminEdit()">\r
                    <i class="fa-solid fa-check me-1"></i>Enregistrer\r
                  </button>\r
                </ng-container>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!--  MODAL REJET                       -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div *ngIf="showRejectModal" class="modal fade show d-block" tabindex="-1"\r
             style="background-color: rgba(0,0,0,0.5);">\r
          <div class="modal-dialog">\r
            <div class="modal-content">\r
              <div class="modal-header bg-danger text-white">\r
                <h5 class="modal-title">\r
                  <i class="fa-solid fa-ban me-2"></i>Rejeter le cours\r
                </h5>\r
                <button type="button" class="btn-close btn-close-white" (click)="closeRejectModal()"></button>\r
              </div>\r
              <div class="modal-body">\r
                <p>Vous allez rejeter le cours : <strong>{{ selectedCourse?.title }}</strong></p>\r
                <div class="mb-3">\r
                  <label class="form-label">Raison du rejet *</label>\r
                  <textarea class="form-control" rows="4" [(ngModel)]="rejectionReason"\r
                            placeholder="Expliquez pourquoi le cours est rejet\xE9 (contenu insuffisant, qualit\xE9, etc.)"></textarea>\r
                </div>\r
                <p class="text-muted small">\r
                  <i class="fa-solid fa-info-circle me-1"></i>\r
                  L'instructeur recevra un email avec cette raison et pourra modifier puis re-soumettre.\r
                </p>\r
              </div>\r
              <div class="modal-footer">\r
                <button class="btn btn-secondary" (click)="closeRejectModal()">Annuler</button>\r
                <button class="btn btn-danger" (click)="confirmReject()" [disabled]="!rejectionReason.trim()">\r
                  <i class="fa-solid fa-ban me-1"></i>Confirmer le rejet\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550 ONGLET TOUS LES COURS \u2550\u2550 -->\r
        <div *ngIf="activeTab === 'all'">\r
          <div *ngIf="loadingAll" class="text-center py-5">\r
            <div class="spinner-border text-info" role="status"></div>\r
            <p class="mt-2 text-muted">Chargement...</p>\r
          </div>\r
          <div *ngIf="!loadingAll && allCourses.length === 0" class="text-center py-5">\r
            <h5 class="text-muted">Aucun cours</h5>\r
          </div>\r
          <div *ngIf="!loadingAll && allCourses.length > 0">\r
            <div class="card mb-2 shadow-sm" *ngFor="let course of allCourses">\r
              <div class="card-body py-2">\r
                <div class="row align-items-center">\r
                  <div class="col-md-2">\r
                    <img [src]="getImageUrl(course.coverImage)" class="img-fluid rounded"\r
                         style="height:70px; width:100%; object-fit:cover;" alt="">\r
                  </div>\r
                  <div class="col-md-6">\r
                    <div class="d-flex align-items-center gap-2 mb-1">\r
                      <strong>{{ course.title }}</strong>\r
                      <span class="badge"\r
                            [ngClass]="course.status==='PUBLISHED'?'bg-success':course.status==='PENDING'?'bg-warning text-dark':course.status==='DRAFT'?'bg-secondary':course.status==='REJECTED'?'bg-danger':'bg-dark'">\r
                        {{ course.status }}\r
                      </span>\r
                      <span *ngIf="course.hasPendingEdit" class="badge bg-primary">\r
                        <i class="fa-solid fa-pen-to-square me-1"></i>Modif. en attente\r
                      </span>\r
                    </div>\r
                    <p class="text-muted small mb-0">\r
                      {{ course.instructorName }} &nbsp;|&nbsp;\r
                      <ng-container *ngIf="course.onSale; else normalPriceAll">\r
                        <span class="text-decoration-line-through text-muted me-1">{{ course.price | number:'1.2-2' }} \u20AC</span>\r
                        <span class="text-danger fw-bold">{{ course.effectivePrice | number:'1.2-2' }} \u20AC</span>\r
                        <span class="badge bg-danger ms-1">PROMO</span>\r
                      </ng-container>\r
                      <ng-template #normalPriceAll>{{ course.price | number:'1.2-2' }} \u20AC</ng-template>\r
                    </p>\r
                  </div>\r
                  <div class="col-md-4 text-end d-flex gap-1 justify-content-end flex-wrap">\r
                    <button class="btn btn-outline-info btn-sm" (click)="openPriceModal(course)">\r
                      <i class="fa-solid fa-euro-sign"></i>\r
                    </button>\r
                    <button class="btn btn-outline-warning btn-sm" (click)="openPromoModal(course)">\r
                      <i class="fa-solid fa-tag"></i>\r
                    </button>\r
                    <button class="btn btn-sm"\r
                            [ngClass]="course.featured ? 'btn-warning' : 'btn-outline-secondary'"\r
                            (click)="toggleFeatured(course)"\r
                            [title]="course.featured ? 'Retirer des mis en avant' : 'Mettre en avant'">\r
                      <i class="fa-solid fa-star"></i>\r
                    </button>\r
                    <button class="btn btn-outline-secondary btn-sm" *ngIf="course.status==='PUBLISHED'"\r
                            (click)="adminArchive(course)">\r
                      <i class="fa-solid fa-archive"></i>\r
                    </button>\r
                    <button class="btn btn-danger btn-sm" (click)="openDeleteModal(course)">\r
                      <i class="fa-solid fa-trash"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550 ONGLET MODIFICATIONS EN ATTENTE \u2550\u2550 -->\r
        <div *ngIf="activeTab === 'pending-edits'">\r
          <div *ngIf="loadingPendingEdits" class="text-center py-5">\r
            <div class="spinner-border text-primary" role="status"></div>\r
            <p class="mt-2 text-muted">Chargement...</p>\r
          </div>\r
          <div *ngIf="!loadingPendingEdits && pendingEditsCourses.length === 0" class="text-center py-5">\r
            <i class="fa-solid fa-check-double fa-3x text-success mb-3"></i>\r
            <h5 class="text-muted">Aucune modification en attente</h5>\r
            <p class="text-muted">Toutes les modifications ont \xE9t\xE9 trait\xE9es</p>\r
          </div>\r
          <div *ngIf="!loadingPendingEdits && pendingEditsCourses.length > 0">\r
            <div class="card mb-3 shadow-sm border-primary" *ngFor="let course of pendingEditsCourses">\r
              <div class="card-body">\r
                <div class="row align-items-start">\r
                  <!-- Image -->\r
                  <div class="col-md-2">\r
                    <img [src]="getImageUrl(course.coverImage)" class="img-fluid rounded"\r
                         style="height: 100px; width: 100%; object-fit: cover;" alt="cover">\r
                  </div>\r
                  <!-- Info + Comparaison -->\r
                  <div class="col-md-6">\r
                    <div class="d-flex align-items-center gap-2 mb-2">\r
                      <h5 class="mb-0">{{ course.title }}</h5>\r
                      <span class="badge bg-primary">Modification en attente</span>\r
                    </div>\r
                    <p class="text-muted small mb-2">\r
                      <i class="fa-solid fa-user me-1"></i>{{ course.instructorName }}\r
                    </p>\r
                    <!-- Tableau de comparaison -->\r
                    <div *ngIf="course.pendingEditData" class="table-responsive">\r
                      <table class="table table-sm table-bordered mb-0" style="font-size: 0.82rem;">\r
                        <thead class="table-light">\r
                          <tr>\r
                            <th style="width:25%">Champ</th>\r
                            <th style="width:37%">Valeur actuelle</th>\r
                            <th style="width:38%">Modification propos\xE9e</th>\r
                          </tr>\r
                        </thead>\r
                        <tbody>\r
                          <tr *ngIf="course.pendingEditData.title && course.pendingEditData.title !== course.title">\r
                            <td class="fw-bold">Titre</td>\r
                            <td class="text-muted">{{ course.title }}</td>\r
                            <td class="text-primary fw-semibold">{{ course.pendingEditData.title }}</td>\r
                          </tr>\r
                          <tr *ngIf="course.pendingEditData.description && course.pendingEditData.description !== course.description">\r
                            <td class="fw-bold">Description</td>\r
                            <td class="text-muted">{{ (course.description || '') | slice:0:80 }}...</td>\r
                            <td class="text-primary fw-semibold">{{ (course.pendingEditData.description || '') | slice:0:80 }}...</td>\r
                          </tr>\r
                          <tr *ngIf="course.pendingEditData.price != null && +course.pendingEditData.price !== +course.price">\r
                            <td class="fw-bold">Prix</td>\r
                            <td class="text-muted">{{ course.price | number:'1.2-2' }} \u20AC</td>\r
                            <td class="text-primary fw-semibold">{{ course.pendingEditData.price | number:'1.2-2' }} \u20AC</td>\r
                          </tr>\r
                          <tr *ngIf="course.pendingEditData.level && course.pendingEditData.level !== course.level">\r
                            <td class="fw-bold">Niveau</td>\r
                            <td class="text-muted">{{ getLevelLabel(course.level) }}</td>\r
                            <td class="text-primary fw-semibold">{{ getLevelLabel(course.pendingEditData.level) }}</td>\r
                          </tr>\r
                          <tr *ngIf="course.pendingEditData.language && course.pendingEditData.language !== course.language">\r
                            <td class="fw-bold">Langue</td>\r
                            <td class="text-muted">{{ course.language }}</td>\r
                            <td class="text-primary fw-semibold">{{ course.pendingEditData.language }}</td>\r
                          </tr>\r
                        </tbody>\r
                      </table>\r
                    </div>\r
                  </div>\r
                  <!-- Actions -->\r
                  <div class="col-md-4 text-end d-flex flex-column align-items-end gap-2">\r
                    <button class="btn btn-success btn-sm w-100" (click)="approvePendingEditAction(course)">\r
                      <i class="fa-solid fa-check me-1"></i>Approuver la modification\r
                    </button>\r
                    <button class="btn btn-danger btn-sm w-100" (click)="openRejectEditModal(course)">\r
                      <i class="fa-solid fa-times me-1"></i>Rejeter la modification\r
                    </button>\r
                    <button class="btn btn-outline-primary btn-sm w-100" (click)="openDetail(course)">\r
                      <i class="fa-solid fa-eye me-1"></i>Voir le cours complet\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  MODAL REJETER MODIFICATION                           -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="showRejectEditModal" class="modal fade show d-block" tabindex="-1"\r
     style="background-color: rgba(0,0,0,0.5);">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header bg-danger text-white">\r
        <h5 class="modal-title">\r
          <i class="fa-solid fa-ban me-2"></i>Rejeter la modification\r
        </h5>\r
        <button type="button" class="btn-close btn-close-white" (click)="closeRejectEditModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <p>Rejeter la modification du cours : <strong>{{ editRejectCourse?.title }}</strong></p>\r
        <div class="mb-3">\r
          <label class="form-label">Raison du rejet (optionnel)</label>\r
          <textarea class="form-control" rows="3" [(ngModel)]="editRejectReason"\r
                    placeholder="Expliquez pourquoi la modification est rejet\xE9e..."></textarea>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closeRejectEditModal()">Annuler</button>\r
        <button class="btn btn-danger" (click)="confirmRejectEdit()">\r
          <i class="fa-solid fa-ban me-1"></i>Confirmer le rejet\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  MODAL SUPPRIMER (ADMIN)                              -->\r
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
        <h5 class="mb-2">Supprimer le cours ?</h5>\r
        <p class="text-muted mb-4">\r
          \xCAtes-vous s\xFBr de vouloir supprimer <strong>{{ courseToDelete?.title }}</strong> ?<br>\r
          Cette action est irr\xE9versible et supprime toutes les inscriptions et donn\xE9es associ\xE9es.\r
        </p>\r
        <div class="d-flex justify-content-center gap-2">\r
          <button class="btn btn-light rounded-pill px-4" (click)="closeDeleteModal()">Annuler</button>\r
          <button class="btn btn-danger rounded-pill px-4" (click)="confirmAdminDelete()">Oui, supprimer</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  MODAL MODIFIER PRIX                                  -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="showPriceModal" class="modal fade show d-block" tabindex="-1"\r
     style="background-color: rgba(0,0,0,0.5);">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header bg-info text-white">\r
        <h5 class="modal-title">\r
          <i class="fa-solid fa-euro-sign me-2"></i>Modifier le prix : {{ selectedCourse?.title }}\r
        </h5>\r
        <button type="button" class="btn-close btn-close-white" (click)="closePriceModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="mb-3">\r
          <label class="form-label">Nouveau prix (\u20AC)</label>\r
          <input type="number" class="form-control" [(ngModel)]="newPrice"\r
                 min="0" step="0.01" placeholder="Ex: 29.99">\r
        </div>\r
        <p class="text-muted small">Prix actuel : <strong>{{ selectedCourse?.price | number:'1.2-2' }} \u20AC</strong></p>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closePriceModal()">Annuler</button>\r
        <button class="btn btn-info text-white" (click)="savePriceModal()">\r
          <i class="fa-solid fa-save me-1"></i>Enregistrer\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  MODAL PROMOTION                                      -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="showPromoModal" class="modal fade show d-block" tabindex="-1"\r
     style="background-color: rgba(0,0,0,0.5);">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header bg-warning text-dark">\r
        <h5 class="modal-title">\r
          <i class="fa-solid fa-tag me-2"></i>Promotion : {{ selectedCourse?.title }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="closePromoModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="mb-3">\r
          <label class="form-label">Prix promotionnel (\u20AC)</label>\r
          <input type="number" class="form-control" [(ngModel)]="promoPrice"\r
                 min="0" step="0.01" placeholder="Ex: 9.99">\r
        </div>\r
        <div class="mb-3">\r
          <label class="form-label">Date de fin de promotion</label>\r
          <input type="datetime-local" class="form-control" [(ngModel)]="promoEndsAt">\r
        </div>\r
        <p class="text-muted small">Prix normal : <strong>{{ selectedCourse?.price | number:'1.2-2' }} \u20AC</strong></p>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closePromoModal()">Annuler</button>\r
        <button class="btn btn-warning" (click)="savePromoModal()" [disabled]="!promoPrice || !promoEndsAt">\r
          <i class="fa-solid fa-tag me-1"></i>Appliquer la promotion\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ADMIN \u2014 LESSON CONTENT PREVIEW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- z-index 1065 keeps this above the detail modal (1055) without a second backdrop -->\r
<div class="modal fade" id="admin_lesson_preview" tabindex="-1" aria-modal="true" role="dialog"\r
     style="z-index:1065;">\r
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content" style="border:none;border-radius:12px;overflow:hidden;">\r
\r
      <!-- Header -->\r
      <div class="modal-header" style="background:linear-gradient(135deg,#1a1d2e 0%,#2d3250 100%);border-bottom:none;">\r
        <div class="d-flex align-items-center gap-3">\r
          <div style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;">\r
            <i class="fa-solid fa-eye text-white"></i>\r
          </div>\r
          <div>\r
            <div style="font-size:11px;color:rgba(255,255,255,.5);letter-spacing:1px;text-transform:uppercase;">Aper\xE7u de le\xE7on</div>\r
            <h5 class="mb-0 text-white fw-semibold" style="font-size:16px;">{{ previewLesson?.title }}</h5>\r
          </div>\r
        </div>\r
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fermer"></button>\r
      </div>\r
\r
      <!-- Content type pills -->\r
      <div *ngIf="previewLesson" class="px-3 pt-3 pb-2 d-flex gap-2 flex-wrap"\r
           style="background:#f8f9fa;border-bottom:1px solid #e9ecef;">\r
        <span *ngIf="previewLesson.videoUrl" class="badge rounded-pill bg-success px-3 py-2">\r
          <i class="fa-solid fa-video me-1"></i>Vid\xE9o\r
        </span>\r
        <span *ngIf="previewLesson.pdfUrl" class="badge rounded-pill bg-danger px-3 py-2">\r
          <i class="fa-solid fa-file-pdf me-1"></i>PDF\r
        </span>\r
        <span *ngIf="previewLesson.articleContent" class="badge rounded-pill bg-warning text-dark px-3 py-2">\r
          <i class="fa-solid fa-file-lines me-1"></i>Article\r
        </span>\r
        <span *ngIf="!previewLesson.videoUrl && !previewLesson.pdfUrl && !previewLesson.articleContent"\r
              class="badge rounded-pill bg-secondary px-3 py-2">\r
          <i class="fa-solid fa-circle-xmark me-1"></i>Aucun contenu\r
        </span>\r
      </div>\r
\r
      <div class="modal-body p-0" *ngIf="previewLesson">\r
\r
        <!-- \u2500\u2500 Vid\xE9o \u2500\u2500 -->\r
        <div *ngIf="previewLesson.videoUrl" class="border-bottom">\r
          <div class="d-flex justify-content-between align-items-center px-4 py-2"\r
               style="background:#e8f5e9;">\r
            <span class="fw-semibold text-success" style="font-size:13px;">\r
              <i class="fa-solid fa-video me-2"></i>Vid\xE9o\r
            </span>\r
            <a [href]="getFileUrl(previewLesson.videoUrl)" target="_blank"\r
               class="btn btn-sm btn-outline-success" style="font-size:12px;">\r
              <i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Ouvrir dans un nouvel onglet\r
            </a>\r
          </div>\r
          <div style="background:#000;">\r
            <video class="d-block mx-auto" controls\r
                   [src]="getFileUrl(previewLesson.videoUrl)"\r
                   style="max-height:440px;width:100%;outline:none;"></video>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 PDF \u2500\u2500 -->\r
        <div *ngIf="previewLesson.pdfUrl" class="border-bottom">\r
          <div class="d-flex justify-content-between align-items-center px-4 py-2"\r
               style="background:#ffebee;">\r
            <span class="fw-semibold text-danger" style="font-size:13px;">\r
              <i class="fa-solid fa-file-pdf me-2"></i>PDF\r
            </span>\r
            <a [href]="getFileUrl(previewLesson.pdfUrl)" target="_blank"\r
               class="btn btn-sm btn-outline-danger" style="font-size:12px;">\r
              <i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Ouvrir dans un nouvel onglet\r
            </a>\r
          </div>\r
          <iframe [src]="getFileUrl(previewLesson.pdfUrl) | safeUrl"\r
                  style="width:100%;height:540px;border:none;display:block;"></iframe>\r
        </div>\r
\r
        <!-- \u2500\u2500 Article \u2500\u2500 -->\r
        <div *ngIf="previewLesson.articleContent">\r
          <div class="d-flex align-items-center px-4 py-2" style="background:#fffde7;">\r
            <span class="fw-semibold" style="font-size:13px;color:#f9a825;">\r
              <i class="fa-solid fa-file-lines me-2"></i>Article\r
            </span>\r
            <span class="ms-2 text-muted" style="font-size:11px;">\r
              \u2014 Les blocs de code disposent d'un bouton <strong>Ex\xE9cuter</strong> et <strong>Copier</strong>\r
            </span>\r
          </div>\r
          <div class="article-preview-body px-4 py-4"\r
               [innerHTML]="previewLesson.articleContent"\r
               style="font-size:15px;line-height:1.9;max-width:900px;margin:0 auto;"></div>\r
        </div>\r
\r
        <!-- \u2500\u2500 Aucun contenu \u2500\u2500 -->\r
        <div *ngIf="!previewLesson.videoUrl && !previewLesson.pdfUrl && !previewLesson.articleContent"\r
             class="text-center text-muted py-5">\r
          <i class="fa-solid fa-folder-open fa-3x mb-3 d-block" style="color:#dee2e6;"></i>\r
          <p class="mb-0">Aucun contenu disponible pour cette le\xE7on.</p>\r
        </div>\r
\r
      </div>\r
\r
      <div class="modal-footer" style="background:#f8f9fa;border-top:1px solid #e9ecef;">\r
        <button class="btn btn-secondary btn-sm" data-bs-dismiss="modal">\r
          <i class="fa-solid fa-xmark me-1"></i>Fermer\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/admin/admin-courses/admin-courses.component.scss */\n.card {\n  transition: transform 0.2s;\n}\n.card:hover {\n  transform: translateY(-2px);\n}\n.modal.show {\n  z-index: 1050;\n}\n/*# sourceMappingURL=admin-courses.component.css.map */\n"] }]
  }], () => [{ type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCoursesComponent, { className: "AdminCoursesComponent", filePath: "src/app/features/admin/admin-courses/admin-courses.component.ts", lineNumber: 14 });
})();
export {
  AdminCoursesComponent
};
//# sourceMappingURL=chunk-BT5I3DYO.js.map
