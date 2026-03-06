import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  Subject,
  debounceTime,
  distinctUntilChanged,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/courses/course-list-public/course-list-public.component.ts
function CourseListPublicComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 72);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_2_Template_button_click_3_listener() {
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
function CourseListPublicComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 72);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_3_Template_button_click_3_listener() {
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
function CourseListPublicComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 20)(2, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_div_26_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategoryId, $event) || (ctx_r1.selectedCategoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CourseListPublicComponent_div_26_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", cat_r5.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategoryId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cat_r5.name, " ");
  }
}
function CourseListPublicComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function CourseListPublicComponent_h6_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.filteredCourses.length, " cours trouv\xE9", ctx_r1.filteredCourses.length > 1 ? "s" : "", " ");
  }
}
function CourseListPublicComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "div", 78);
    \u0275\u0275elementStart(2, "p", 79);
    \u0275\u0275text(3, "Chargement des cours...");
    \u0275\u0275elementEnd()();
  }
}
function CourseListPublicComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "h5", 81);
    \u0275\u0275text(3, "Aucun cours trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 75);
    \u0275\u0275text(5, "Essayez de modifier vos crit\xE8res de recherche.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 82);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_144_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(7, "i", 83);
    \u0275\u0275text(8, "R\xE9initialiser les filtres ");
    \u0275\u0275elementEnd()();
  }
}
function CourseListPublicComponent_div_145_div_1_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 105);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 2, course_r8.averageRating, "1.1-1"), " (", course_r8.reviewCount || 0, " avis) ");
  }
}
function CourseListPublicComponent_div_145_div_1_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 107);
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2, "Aucun avis ");
    \u0275\u0275elementEnd();
  }
}
function CourseListPublicComponent_div_145_div_1_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 109);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_145_div_1_ng_container_24_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2, " Acc\xE9der");
    \u0275\u0275element(3, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function CourseListPublicComponent_div_145_div_1_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "a", 112);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_145_div_1_ng_template_25_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const course_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(course_r8.id, $event));
    });
    \u0275\u0275element(2, "i", 113);
    \u0275\u0275text(3, "Panier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 114);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_145_div_1_ng_template_25_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const course_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.goToDetail(course_r8.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(5, " Voir");
    \u0275\u0275element(6, "i", 110);
    \u0275\u0275elementEnd()();
  }
}
function CourseListPublicComponent_div_145_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_145_div_1_Template_div_click_1_listener() {
      const course_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToDetail(course_r8.id));
    });
    \u0275\u0275elementStart(2, "div", 88);
    \u0275\u0275element(3, "img", 89);
    \u0275\u0275elementStart(4, "div", 90)(5, "a", 91);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_145_div_1_Template_a_click_5_listener($event) {
      const course_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleWishlist(course_r8, $event));
    });
    \u0275\u0275element(6, "i", 92);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 93)(8, "div", 94)(9, "div", 95);
    \u0275\u0275element(10, "img", 96);
    \u0275\u0275elementStart(11, "div", 97)(12, "span", 98);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "span", 99);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h6", 100);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, CourseListPublicComponent_div_145_div_1_p_18_Template, 4, 5, "p", 101)(19, CourseListPublicComponent_div_145_div_1_ng_template_19_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(21, "div", 102)(22, "h5", 103);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, CourseListPublicComponent_div_145_div_1_ng_container_24_Template, 4, 0, "ng-container", 104)(25, CourseListPublicComponent_div_145_div_1_ng_template_25_Template, 7, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r8 = ctx.$implicit;
    const noRating_r11 = \u0275\u0275reference(20);
    const notEnrolledGrid_r12 = \u0275\u0275reference(26);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("alt", \u0275\u0275interpolate(course_r8.title))("src", ctx_r1.getImageUrl(course_r8.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r1.isInWishlist(course_r8.id));
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.isInWishlist(course_r8.id) ? "Retirer de la wishlist" : "Ajouter \xE0 la wishlist"));
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.getInstructorAvatar(course_r8.instructorAvatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r8.instructorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r8.categoryName || "Cours", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r8.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r8.averageRating)("ngIfElse", noRating_r11);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(course_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEnrolled(course_r8.id))("ngIfElse", notEnrolledGrid_r12);
  }
}
function CourseListPublicComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, CourseListPublicComponent_div_145_div_1_Template, 27, 16, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedCourses);
  }
}
function CourseListPublicComponent_div_146_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "p", 133);
    \u0275\u0275element(2, "i", 106);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 134);
    \u0275\u0275elementStart(6, "p", 127);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 3, course_r14.averageRating, "1.1-1"), " (", course_r14.reviewCount || 0, " avis) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getLevelLabel(course_r14.level));
  }
}
function CourseListPublicComponent_div_146_div_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 109);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_146_div_1_ng_container_23_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2, " Acc\xE9der");
    \u0275\u0275element(3, "i", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function CourseListPublicComponent_div_146_div_1_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "a", 112);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_146_div_1_ng_template_24_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const course_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(course_r14.id, $event));
    });
    \u0275\u0275element(2, "i", 113);
    \u0275\u0275text(3, "Panier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 114);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_146_div_1_ng_template_24_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const course_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.goToDetail(course_r14.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(5, " Voir le cours");
    \u0275\u0275element(6, "i", 135);
    \u0275\u0275elementEnd()();
  }
}
function CourseListPublicComponent_div_146_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_146_div_1_Template_div_click_1_listener() {
      const course_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToDetail(course_r14.id));
    });
    \u0275\u0275elementStart(2, "div", 119)(3, "div", 120);
    \u0275\u0275element(4, "img", 121);
    \u0275\u0275elementStart(5, "div", 122)(6, "a", 123);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_146_div_1_Template_a_click_6_listener($event) {
      const course_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleWishlist(course_r14, $event));
    });
    \u0275\u0275element(7, "i", 92);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 124)(9, "div", 125)(10, "div", 95);
    \u0275\u0275element(11, "img", 126);
    \u0275\u0275elementStart(12, "p", 127);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span")(15, "a", 128);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_146_div_1_Template_a_click_15_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "h4", 129);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CourseListPublicComponent_div_146_div_1_div_19_Template, 8, 6, "div", 130);
    \u0275\u0275elementStart(20, "div", 131)(21, "h5", 132);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, CourseListPublicComponent_div_146_div_1_ng_container_23_Template, 4, 0, "ng-container", 104)(24, CourseListPublicComponent_div_146_div_1_ng_template_24_Template, 7, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const course_r14 = ctx.$implicit;
    const notEnrolledList_r17 = \u0275\u0275reference(25);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(course_r14.title))("src", ctx_r1.getImageUrl(course_r14.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r1.isInWishlist(course_r14.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.getInstructorAvatar(course_r14.instructorAvatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r14.instructorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r14.categoryName || "Cours");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r14.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r14.averageRating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(course_r14));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEnrolled(course_r14.id))("ngIfElse", notEnrolledList_r17);
  }
}
function CourseListPublicComponent_div_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275template(1, CourseListPublicComponent_div_146_div_1_Template, 26, 13, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedCourses);
  }
}
function CourseListPublicComponent_div_147_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 150)(1, "a", 143);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_147_li_9_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275text(2, "1");
    \u0275\u0275elementEnd()();
  }
}
function CourseListPublicComponent_div_147_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 151)(1, "a", 152);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd()();
  }
}
function CourseListPublicComponent_div_147_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 150)(1, "a", 143);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_147_li_11_Template_a_click_1_listener() {
      const p_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r21));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r21 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r21);
  }
}
function CourseListPublicComponent_div_147_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 151)(1, "a", 152);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd()();
  }
}
function CourseListPublicComponent_div_147_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 150)(1, "a", 143);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_147_li_13_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalPages);
  }
}
function CourseListPublicComponent_div_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 138)(2, "p", 139);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 140)(5, "ul", 141)(6, "li", 142)(7, "a", 143);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_147_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(8, "i", 144);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CourseListPublicComponent_div_147_li_9_Template, 3, 0, "li", 145)(10, CourseListPublicComponent_div_147_li_10_Template, 3, 0, "li", 146)(11, CourseListPublicComponent_div_147_li_11_Template, 3, 3, "li", 147)(12, CourseListPublicComponent_div_147_li_12_Template, 3, 0, "li", 146)(13, CourseListPublicComponent_div_147_li_13_Template, 3, 1, "li", 145);
    \u0275\u0275elementStart(14, "li", 148)(15, "a", 143);
    \u0275\u0275listener("click", function CourseListPublicComponent_div_147_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(16, "i", 149);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.currentPage, " sur ", ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.currentPage > 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPage > 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getPageRange());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPage < ctx_r1.totalPages - 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPage < ctx_r1.totalPages - 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var CourseListPublicComponent = class _CourseListPublicComponent {
  courseService;
  router;
  route;
  routes = routes;
  stars = [1, 2, 3, 4, 5];
  // Data
  courses = [];
  filteredCourses = [];
  paginatedCourses = [];
  categories = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  // Filters
  searchTerm = "";
  selectedCategoryId = null;
  selectedLevels = [];
  priceFilter = "all";
  minRating = 0;
  sortBy = "newest";
  viewMode = "grid";
  // Pagination
  pageSize = 12;
  currentPage = 1;
  totalPages = 1;
  // Auth
  isLoggedIn = false;
  wishlistSet = /* @__PURE__ */ new Set();
  enrolledSet = /* @__PURE__ */ new Set();
  buyingCourseId = null;
  addingToCartId = null;
  searchSubject = new Subject();
  constructor(courseService, router, route) {
    this.courseService = courseService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem("token");
    this.searchSubject.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => {
      this.currentPage = 1;
      this.applyFilters();
    });
    this.courseService.getCategories().subscribe({
      next: (cats) => this.categories = cats,
      error: () => {
      }
    });
    if (this.isLoggedIn) {
      this.courseService.getWishlist().subscribe({
        next: (items) => items.forEach((i) => this.wishlistSet.add(i.courseId ?? i.id)),
        error: () => {
        }
      });
      this.courseService.getMyEnrolledCourses().subscribe({
        next: (items) => items.forEach((c) => this.enrolledSet.add(c.id)),
        error: () => {
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (params["search"])
        this.searchTerm = params["search"];
      if (params["categoryId"])
        this.selectedCategoryId = Number(params["categoryId"]);
      if (params["level"])
        this.selectedLevels = [params["level"]];
      if (params["sort"])
        this.sortBy = params["sort"];
      this.loadCourses();
    });
  }
  ngOnDestroy() {
    this.searchSubject.complete();
  }
  loadCourses() {
    this.loading = true;
    this.courseService.getPublishedCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.currentPage = 1;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Erreur lors du chargement des cours.";
        this.loading = false;
      }
    });
  }
  onSearchInput() {
    this.searchSubject.next(this.searchTerm);
  }
  onFilterChange() {
    this.currentPage = 1;
    this.applyFilters();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedCategoryId = null;
    this.selectedLevels = [];
    this.priceFilter = "all";
    this.minRating = 0;
    this.sortBy = "newest";
    this.currentPage = 1;
    this.applyFilters();
  }
  toggleLevel(level) {
    const idx = this.selectedLevels.indexOf(level);
    if (idx > -1)
      this.selectedLevels.splice(idx, 1);
    else
      this.selectedLevels.push(level);
    this.onFilterChange();
  }
  isLevelSelected(level) {
    return this.selectedLevels.includes(level);
  }
  applyFilters() {
    let r = [...this.courses];
    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      r = r.filter((c) => c.title?.toLowerCase().includes(q) || c.description?.toLowerCase().includes(q) || c.instructorName?.toLowerCase().includes(q));
    }
    if (this.selectedCategoryId)
      r = r.filter((c) => c.categoryId === this.selectedCategoryId);
    if (this.selectedLevels.length > 0)
      r = r.filter((c) => this.selectedLevels.includes(c.level));
    if (this.priceFilter === "free")
      r = r.filter((c) => +(c.effectivePrice ?? c.price ?? 0) === 0);
    else if (this.priceFilter === "paid")
      r = r.filter((c) => +(c.effectivePrice ?? c.price ?? 0) > 0);
    if (this.minRating > 0)
      r = r.filter((c) => (c.averageRating ?? 0) >= this.minRating);
    switch (this.sortBy) {
      case "newest":
        r.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
        break;
      case "top-rated":
        r.sort((a, b) => (b.averageRating ?? 0) - (a.averageRating ?? 0));
        break;
      case "popular":
        r.sort((a, b) => (b.enrollmentCount ?? 0) - (a.enrollmentCount ?? 0));
        break;
      case "price-asc":
        r.sort((a, b) => +(a.effectivePrice ?? a.price ?? 0) - +(b.effectivePrice ?? b.price ?? 0));
        break;
      case "price-desc":
        r.sort((a, b) => +(b.effectivePrice ?? b.price ?? 0) - +(a.effectivePrice ?? a.price ?? 0));
        break;
    }
    this.filteredCourses = r;
    this.totalPages = Math.max(1, Math.ceil(r.length / this.pageSize));
    if (this.currentPage > this.totalPages)
      this.currentPage = this.totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedCourses = r.slice(start, start + this.pageSize);
  }
  goToPage(p) {
    if (p < 1 || p > this.totalPages)
      return;
    this.currentPage = p;
    const start = (p - 1) * this.pageSize;
    this.paginatedCourses = this.filteredCourses.slice(start, start + this.pageSize);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  getPageRange() {
    const range = [];
    for (let i = Math.max(1, this.currentPage - 2); i <= Math.min(this.totalPages, this.currentPage + 2); i++)
      range.push(i);
    return range;
  }
  goToDetail(courseId) {
    this.router.navigate([this.routes.courseDetails], { queryParams: { courseId } });
  }
  isInWishlist(id) {
    return this.wishlistSet.has(id);
  }
  isEnrolled(id) {
    return this.enrolledSet.has(id);
  }
  toggleWishlist(course, event) {
    event.stopPropagation();
    if (!this.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    if (this.isInWishlist(course.id)) {
      this.courseService.removeFromWishlist(course.id).subscribe({ next: () => this.wishlistSet.delete(course.id), error: () => {
      } });
    } else {
      this.courseService.addToWishlist(course.id).subscribe({
        next: () => {
          this.wishlistSet.add(course.id);
          this.showSuccess("Ajout\xE9 \xE0 la wishlist !");
        },
        error: (e) => {
          this.errorMessage = e.error?.message || "Erreur wishlist";
        }
      });
    }
  }
  buyCourse(courseId, event) {
    event.stopPropagation();
    if (!this.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.buyingCourseId = courseId;
    this.courseService.createCheckoutSession(courseId).subscribe({
      next: (r) => {
        window.location.href = r.url;
      },
      error: (e) => {
        this.buyingCourseId = null;
        this.errorMessage = e.error?.error || "Erreur paiement";
        setTimeout(() => this.errorMessage = "", 5e3);
      }
    });
  }
  addToCart(courseId, event) {
    event.stopPropagation();
    if (!this.isLoggedIn) {
      const course = this.courses.find((c) => c.id === courseId);
      const cart = JSON.parse(localStorage.getItem("guest_cart") || "[]");
      if (!cart.some((c) => c.id === courseId)) {
        cart.push({
          id: courseId,
          title: course?.title || "",
          coverImage: course?.coverImage || "",
          price: course?.price || 0,
          effectivePrice: course?.effectivePrice || 0,
          instructorName: course?.instructorName || ""
        });
        localStorage.setItem("guest_cart", JSON.stringify(cart));
        this.showSuccess("Ajout\xE9 au panier ! Connectez-vous pour finaliser l'achat.");
      } else {
        this.showSuccess("Ce cours est d\xE9j\xE0 dans votre panier.");
      }
      return;
    }
    const role = localStorage.getItem("role") || "";
    if (!role.includes("STUDENT")) {
      return;
    }
    this.addingToCartId = courseId;
    this.courseService.addToCart(courseId).subscribe({
      next: () => {
        this.addingToCartId = null;
        this.showSuccess("Ajout\xE9 au panier !");
      },
      error: (e) => {
        this.addingToCartId = null;
        this.errorMessage = e.error?.message || "Erreur";
        setTimeout(() => this.errorMessage = "", 4e3);
      }
    });
  }
  getLevelLabel(l) {
    const m = { BEGINNER: "D\xE9butant", INTERMEDIATE: "Interm\xE9diaire", ADVANCED: "Avanc\xE9" };
    return m[l] ?? l;
  }
  formatPrice(course) {
    const price = +(course.effectivePrice ?? course.price ?? 0);
    return price === 0 ? "Gratuit" : price.toFixed(2) + " \u20AC";
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    return `http://localhost:8081/${path}`;
  }
  getInstructorAvatar(path) {
    if (!path)
      return "assets/img/avatar/avatar1.jpg";
    return `http://localhost:8081/${path}`;
  }
  showSuccess(msg) {
    this.successMessage = msg;
    this.errorMessage = "";
    setTimeout(() => this.successMessage = "", 3e3);
  }
  static \u0275fac = function CourseListPublicComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseListPublicComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseListPublicComponent, selectors: [["app-course-list-public"]], decls: 148, vars: 32, consts: [["noRating", ""], ["notEnrolledGrid", ""], ["notEnrolledList", ""], [1, "course-content", "course-list-content"], [1, "container"], ["class", "alert alert-success alert-dismissible fade show mt-3", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show mt-3", 4, "ngIf"], [1, "row", "align-items-baseline"], [1, "col-lg-3", "theiaStickySidebar"], [1, "filter-clear"], [1, "clear-filter", "mb-4", "pb-lg-2", "d-flex", "align-items-center", "justify-content-between"], [1, "feather-filter", "me-2"], ["href", "javascript:void(0);", 1, "clear-text", 3, "click"], [1, "accordion", "accordion-customicon1", "accordions-items-seperate"], [1, "accordion-item"], [1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#filterCat", "aria-expanded", "true", 1, "accordion-button"], [1, "fa-solid", "fa-chevron-down"], ["id", "filterCat", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "custom_check"], ["type", "radio", "name", "cat", 3, "ngModelChange", "change", "value", "ngModel"], [1, "checkmark"], [4, "ngFor", "ngForOf"], ["class", "text-muted small", 4, "ngIf"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#filterPrice", "aria-expanded", "true", 1, "accordion-button"], ["id", "filterPrice", 1, "accordion-collapse", "collapse", "show"], [1, "custom_check", "custom_one"], ["type", "radio", "name", "price", "value", "all", 3, "ngModelChange", "change", "ngModel"], ["type", "radio", "name", "price", "value", "free", 3, "ngModelChange", "change", "ngModel"], [1, "custom_check", "custom_one", "mb-0"], ["type", "radio", "name", "price", "value", "paid", 3, "ngModelChange", "change", "ngModel"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#filterLevel", "aria-expanded", "true", 1, "accordion-button"], ["id", "filterLevel", 1, "accordion-collapse", "collapse", "show"], ["type", "checkbox", 3, "change", "checked"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#filterRating", "aria-expanded", "true", 1, "accordion-button"], ["id", "filterRating", 1, "accordion-collapse", "collapse", "show"], ["type", "radio", "name", "rating", 3, "ngModelChange", "change", "value", "ngModel"], [1, "fa-solid", "fa-star", "text-warning", "me-1"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fa-solid", "fa-star", "text-light", "me-1"], [1, "fa-solid", "fa-star", "text-light"], [1, "col-lg-9"], [1, "showing-list", "mb-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "show-result", "text-center", "text-lg-start"], ["class", "fw-medium", 4, "ngIf"], [1, "col-lg-8"], [1, "show-filter", "add-course-info"], ["action", "#"], [1, "d-sm-flex", "justify-content-center", "justify-content-lg-end", "mb-1", "mb-lg-0"], [1, "view-icons", "mb-2", "mb-sm-0"], ["href", "javascript:void(0);", 1, "grid-view", 3, "click"], [1, "feather", "icon-grid"], ["href", "javascript:void(0);", 1, "list-view", 3, "click"], [1, "isax", "isax-task"], ["name", "sortBy", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "newest"], ["value", "top-rated"], ["value", "popular"], ["value", "price-asc"], ["value", "price-desc"], [1, "search-group"], [1, "feather-search"], ["type", "text", "placeholder", "Rechercher...", "name", "searchTerm", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row course-list-wrap", 4, "ngIf"], ["class", "row align-items-center mt-4", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mt-3"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mt-3"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-muted", "small"], [1, "fw-medium"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-magnifying-glass", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "btn", "btn-outline-primary", "btn-sm", "rounded-pill", "px-4", 3, "click"], [1, "fa-solid", "fa-rotate-left", "me-1"], [1, "row"], ["class", "col-xl-4 col-md-6 d-flex", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6", "d-flex"], [1, "course-item-two", "course-item", "mx-0", "flex-fill", 2, "cursor", "pointer", 3, "click"], [1, "course-img"], [1, "img-fluid", 2, "height", "185px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], ["href", "javascript:void(0);", 1, "fav-icon", "ms-auto", 3, "click", "title"], [1, "isax", "isax-heart"], [1, "course-content"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], ["alt", "instructor", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle", 3, "src"], [1, "ms-2"], [1, "link-default", "fs-14"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], ["class", "d-flex align-items-center mb-3", 4, "ngIf", "ngIfElse"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "mb-0"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "mb-3", "text-muted", "small"], [1, "fa-regular", "fa-star", "me-2"], ["routerLink", "/student/student-my-courses", 1, "btn", "btn-success", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "d-flex", "gap-1"], ["href", "javascript:void(0);", "title", "Ajouter au panier", 1, "btn", "btn-outline-secondary", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-shopping-cart", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "row", "course-list-wrap"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "courses-list-item", 2, "cursor", "pointer", 3, "click"], [1, "d-md-flex", "align-items-center"], [1, "position-relative", "overflow-hidden", "rounded-3", "card-image"], [1, "img-fluid", "rounded-3", 2, "min-height", "120px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "like", 3, "click"], [1, "course-list-contents", "w-100", "ps-0", "ps-md-3", "pt-4", "pt-md-0"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], ["alt", "", 1, "img-fluid", "rounded-circle", "me-2", 2, "width", "28px", "height", "28px", "object-fit", "cover", 3, "src"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "tag-btn", 3, "click"], [1, "mt-3", "mb-2"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-between", "mt-3", "align-items-center"], [1, "text-secondary"], [1, "d-flex", "align-items-center", "mb-0"], [1, "dot"], [1, "fs-8", "fas", "fa-angle-right", "ms-2"], [1, "d-flex", "gap-2"], [1, "row", "align-items-center", "mt-4"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], [1, "fas", "fa-angle-left"], ["class", "page-item", 4, "ngIf"], ["class", "page-item disabled", 4, "ngIf"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], [1, "page-item"], [1, "page-item", "disabled"], [1, "page-link"]], template: function CourseListPublicComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 3)(1, "div", 4);
      \u0275\u0275template(2, CourseListPublicComponent_div_2_Template, 4, 1, "div", 5)(3, CourseListPublicComponent_div_3_Template, 4, 1, "div", 6);
      \u0275\u0275elementStart(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "h5");
      \u0275\u0275element(9, "i", 11);
      \u0275\u0275text(10, "Filtres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 12);
      \u0275\u0275listener("click", function CourseListPublicComponent_Template_a_click_11_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(12, "Effacer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 13)(14, "div", 14)(15, "h2", 15)(16, "a", 16);
      \u0275\u0275text(17, " Cat\xE9gories ");
      \u0275\u0275element(18, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 18)(20, "div", 19)(21, "div")(22, "label", 20)(23, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategoryId, $event) || (ctx.selectedCategoryId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_23_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "span", 22);
      \u0275\u0275text(25, " Toutes les cat\xE9gories ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, CourseListPublicComponent_div_26_Template, 5, 3, "div", 23)(27, CourseListPublicComponent_div_27_Template, 2, 0, "div", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 14)(29, "h2", 15)(30, "a", 25);
      \u0275\u0275text(31, " Prix ");
      \u0275\u0275element(32, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 26)(34, "div", 19)(35, "div")(36, "label", 27)(37, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.priceFilter, $event) || (ctx.priceFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_37_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "span", 22);
      \u0275\u0275text(39, " Tous ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div")(41, "label", 27)(42, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.priceFilter, $event) || (ctx.priceFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_42_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "span", 22);
      \u0275\u0275text(44, " Gratuit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div")(46, "label", 30)(47, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_47_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.priceFilter, $event) || (ctx.priceFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_47_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "span", 22);
      \u0275\u0275text(49, " Payant ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 14)(51, "h2", 15)(52, "a", 32);
      \u0275\u0275text(53, " Niveau ");
      \u0275\u0275element(54, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 33)(56, "div", 19)(57, "div")(58, "label", 27)(59, "input", 34);
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_59_listener() {
        return ctx.toggleLevel("BEGINNER");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "span", 22);
      \u0275\u0275text(61, " D\xE9butant ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div")(63, "label", 27)(64, "input", 34);
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_64_listener() {
        return ctx.toggleLevel("INTERMEDIATE");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "span", 22);
      \u0275\u0275text(66, " Interm\xE9diaire ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div")(68, "label", 30)(69, "input", 34);
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_69_listener() {
        return ctx.toggleLevel("ADVANCED");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "span", 22);
      \u0275\u0275text(71, " Avanc\xE9 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(72, "div", 14)(73, "h2", 15)(74, "a", 35);
      \u0275\u0275text(75, " Note ");
      \u0275\u0275element(76, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 36)(78, "div", 19)(79, "div")(80, "label", 27)(81, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_81_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minRating, $event) || (ctx.minRating = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_81_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "span", 22);
      \u0275\u0275text(83, " Toutes les notes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div")(85, "label", 27)(86, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minRating, $event) || (ctx.minRating = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_86_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(87, "span", 22)(88, "i", 38)(89, "i", 38)(90, "i", 38)(91, "i", 38)(92, "i", 39);
      \u0275\u0275text(93, " & plus ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div")(95, "label", 27)(96, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minRating, $event) || (ctx.minRating = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_96_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "span", 22)(98, "i", 38)(99, "i", 38)(100, "i", 38)(101, "i", 40)(102, "i", 41);
      \u0275\u0275text(103, " & plus ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div")(105, "label", 30)(106, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minRating, $event) || (ctx.minRating = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_input_change_106_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(107, "span", 22)(108, "i", 38)(109, "i", 38)(110, "i", 40)(111, "i", 40)(112, "i", 41);
      \u0275\u0275text(113, " & plus ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(114, "div", 42)(115, "div", 43)(116, "div", 44)(117, "div", 45)(118, "div", 46);
      \u0275\u0275template(119, CourseListPublicComponent_h6_119_Template, 2, 2, "h6", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 48)(121, "div", 49)(122, "form", 50)(123, "div", 51)(124, "div", 52)(125, "a", 53);
      \u0275\u0275listener("click", function CourseListPublicComponent_Template_a_click_125_listener() {
        return ctx.viewMode = "grid";
      });
      \u0275\u0275element(126, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "a", 55);
      \u0275\u0275listener("click", function CourseListPublicComponent_Template_a_click_127_listener() {
        return ctx.viewMode = "list";
      });
      \u0275\u0275element(128, "i", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "select", 57);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_select_ngModelChange_129_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CourseListPublicComponent_Template_select_change_129_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(130, "option", 58);
      \u0275\u0275text(131, "R\xE9cemment publi\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "option", 59);
      \u0275\u0275text(133, "Mieux not\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "option", 60);
      \u0275\u0275text(135, "Plus populaires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option", 61);
      \u0275\u0275text(137, "Prix croissant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "option", 62);
      \u0275\u0275text(139, "Prix d\xE9croissant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 63);
      \u0275\u0275element(141, "i", 64);
      \u0275\u0275elementStart(142, "input", 65);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_142_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CourseListPublicComponent_Template_input_input_142_listener() {
        return ctx.onSearchInput();
      });
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275template(143, CourseListPublicComponent_div_143_Template, 4, 0, "div", 66)(144, CourseListPublicComponent_div_144_Template, 9, 0, "div", 66)(145, CourseListPublicComponent_div_145_Template, 2, 1, "div", 67)(146, CourseListPublicComponent_div_146_Template, 2, 1, "div", 68)(147, CourseListPublicComponent_div_147_Template, 17, 11, "div", 69);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(20);
      \u0275\u0275property("value", null);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategoryId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.categories.length === 0 && !ctx.loading);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.priceFilter);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.priceFilter);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.priceFilter);
      \u0275\u0275advance(12);
      \u0275\u0275property("checked", ctx.isLevelSelected("BEGINNER"));
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.isLevelSelected("INTERMEDIATE"));
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.isLevelSelected("ADVANCED"));
      \u0275\u0275advance(12);
      \u0275\u0275property("value", 0);
      \u0275\u0275twoWayProperty("ngModel", ctx.minRating);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", 4);
      \u0275\u0275twoWayProperty("ngModel", ctx.minRating);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", 3);
      \u0275\u0275twoWayProperty("ngModel", ctx.minRating);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", 2);
      \u0275\u0275twoWayProperty("ngModel", ctx.minRating);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.viewMode === "grid");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode === "list");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCourses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.paginatedCourses.length > 0 && ctx.viewMode === "grid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.paginatedCourses.length > 0 && ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, DecimalPipe], styles: ["\n\n.course-card[_ngcontent-%COMP%] {\n  transition: transform 0.3s, box-shadow 0.3s;\n  border: none;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;\n}\n.card-img-top[_ngcontent-%COMP%] {\n  transition: transform 0.3s;\n}\n.course-card[_ngcontent-%COMP%]:hover   .card-img-top[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=course-list-public.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseListPublicComponent, [{
    type: Component,
    args: [{ selector: "app-course-list-public", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<!-- Course Catalogue Public  V1..V7 -->
<section class="course-content course-list-content">
  <div class="container">

    <!-- Alerts -->
    <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show mt-3">
      <i class="fa-solid fa-check-circle me-2"></i>{{ successMessage }}
      <button type="button" class="btn-close" (click)="successMessage = ''"></button>
    </div>
    <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show mt-3">
      <i class="fa-solid fa-exclamation-circle me-2"></i>{{ errorMessage }}
      <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
    </div>

    <div class="row align-items-baseline">

      <!--  SIDEBAR FILTRES -->
      <div class="col-lg-3 theiaStickySidebar">
        <div class="filter-clear">

          <div class="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">
            <h5><i class="feather-filter me-2"></i>Filtres</h5>
            <a href="javascript:void(0);" class="clear-text" (click)="clearFilters()">Effacer</a>
          </div>

          <div class="accordion accordion-customicon1 accordions-items-seperate">

            <!-- Cat\xE9gories -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#filterCat" aria-expanded="true">
                  Cat\xE9gories <i class="fa-solid fa-chevron-down"></i>
                </a>
              </h2>
              <div id="filterCat" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <div>
                    <label class="custom_check">
                      <input type="radio" name="cat" [value]="null" [(ngModel)]="selectedCategoryId" (change)="onFilterChange()">
                      <span class="checkmark"></span> Toutes les cat\xE9gories
                    </label>
                  </div>
                  <div *ngFor="let cat of categories">
                    <label class="custom_check">
                      <input type="radio" name="cat" [value]="cat.id" [(ngModel)]="selectedCategoryId" (change)="onFilterChange()">
                      <span class="checkmark"></span> {{ cat.name }}
                    </label>
                  </div>
                  <div *ngIf="categories.length === 0 && !loading" class="text-muted small">Chargement...</div>
                </div>
              </div>
            </div>

            <!-- Prix -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#filterPrice" aria-expanded="true">
                  Prix <i class="fa-solid fa-chevron-down"></i>
                </a>
              </h2>
              <div id="filterPrice" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <div>
                    <label class="custom_check custom_one">
                      <input type="radio" name="price" value="all" [(ngModel)]="priceFilter" (change)="onFilterChange()">
                      <span class="checkmark"></span> Tous
                    </label>
                  </div>
                  <div>
                    <label class="custom_check custom_one">
                      <input type="radio" name="price" value="free" [(ngModel)]="priceFilter" (change)="onFilterChange()">
                      <span class="checkmark"></span> Gratuit
                    </label>
                  </div>
                  <div>
                    <label class="custom_check custom_one mb-0">
                      <input type="radio" name="price" value="paid" [(ngModel)]="priceFilter" (change)="onFilterChange()">
                      <span class="checkmark"></span> Payant
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Niveau -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#filterLevel" aria-expanded="true">
                  Niveau <i class="fa-solid fa-chevron-down"></i>
                </a>
              </h2>
              <div id="filterLevel" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <div>
                    <label class="custom_check custom_one">
                      <input type="checkbox" [checked]="isLevelSelected('BEGINNER')" (change)="toggleLevel('BEGINNER')">
                      <span class="checkmark"></span> D\xE9butant
                    </label>
                  </div>
                  <div>
                    <label class="custom_check custom_one">
                      <input type="checkbox" [checked]="isLevelSelected('INTERMEDIATE')" (change)="toggleLevel('INTERMEDIATE')">
                      <span class="checkmark"></span> Interm\xE9diaire
                    </label>
                  </div>
                  <div>
                    <label class="custom_check custom_one mb-0">
                      <input type="checkbox" [checked]="isLevelSelected('ADVANCED')" (change)="toggleLevel('ADVANCED')">
                      <span class="checkmark"></span> Avanc\xE9
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Note minimale -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#filterRating" aria-expanded="true">
                  Note <i class="fa-solid fa-chevron-down"></i>
                </a>
              </h2>
              <div id="filterRating" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <div>
                    <label class="custom_check custom_one">
                      <input type="radio" name="rating" [value]="0" [(ngModel)]="minRating" (change)="onFilterChange()">
                      <span class="checkmark"></span> Toutes les notes
                    </label>
                  </div>
                  <div>
                    <label class="custom_check custom_one">
                      <input type="radio" name="rating" [value]="4" [(ngModel)]="minRating" (change)="onFilterChange()">
                      <span class="checkmark"></span>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      &amp; plus
                    </label>
                  </div>
                  <div>
                    <label class="custom_check custom_one">
                      <input type="radio" name="rating" [value]="3" [(ngModel)]="minRating" (change)="onFilterChange()">
                      <span class="checkmark"></span>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-light me-1"></i>
                      <i class="fa-solid fa-star text-light"></i>
                      &amp; plus
                    </label>
                  </div>
                  <div>
                    <label class="custom_check custom_one mb-0">
                      <input type="radio" name="rating" [value]="2" [(ngModel)]="minRating" (change)="onFilterChange()">
                      <span class="checkmark"></span>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-warning me-1"></i>
                      <i class="fa-solid fa-star text-light me-1"></i>
                      <i class="fa-solid fa-star text-light me-1"></i>
                      <i class="fa-solid fa-star text-light"></i>
                      &amp; plus
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- /Sidebar -->

      <!--  CONTENU PRINCIPAL -->
      <div class="col-lg-9">

        <!-- Barre d'outils -->
        <div class="showing-list mb-4">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <div class="show-result text-center text-lg-start">
                <h6 *ngIf="!loading" class="fw-medium">
                  {{ filteredCourses.length }} cours trouv\xE9{{ filteredCourses.length > 1 ? 's' : '' }}
                </h6>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="show-filter add-course-info">
                <form action="#">
                  <div class="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">
                    <!-- Vue grille/liste -->
                    <div class="view-icons mb-2 mb-sm-0">
                      <a href="javascript:void(0);" [class.active]="viewMode === 'grid'" class="grid-view" (click)="viewMode = 'grid'"><i class="feather icon-grid"></i></a>
                      <a href="javascript:void(0);" [class.active]="viewMode === 'list'" class="list-view" (click)="viewMode = 'list'"><i class="isax isax-task"></i></a>
                    </div>
                    <!-- Tri -->
                    <select class="form-select" [(ngModel)]="sortBy" name="sortBy" (change)="onFilterChange()">
                      <option value="newest">R\xE9cemment publi\xE9s</option>
                      <option value="top-rated">Mieux not\xE9s</option>
                      <option value="popular">Plus populaires</option>
                      <option value="price-asc">Prix croissant</option>
                      <option value="price-desc">Prix d\xE9croissant</option>
                    </select>
                    <!-- Recherche rapide -->
                    <div class="search-group">
                      <i class="feather-search"></i>
                      <input type="text" class="form-control" placeholder="Rechercher..." [(ngModel)]="searchTerm" name="searchTerm" (input)="onSearchInput()">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Barre d'outils -->

        <!-- Loading -->
        <div *ngIf="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-2 text-muted">Chargement des cours...</p>
        </div>

        <!-- Aucun r\xE9sultat -->
        <div *ngIf="!loading && filteredCourses.length === 0" class="text-center py-5">
          <i class="fa-solid fa-magnifying-glass fa-3x text-muted mb-3"></i>
          <h5 class="text-muted">Aucun cours trouv\xE9</h5>
          <p class="text-muted small">Essayez de modifier vos crit\xE8res de recherche.</p>
          <button class="btn btn-outline-primary btn-sm rounded-pill px-4" (click)="clearFilters()">
            <i class="fa-solid fa-rotate-left me-1"></i>R\xE9initialiser les filtres
          </button>
        </div>

        <!--  VUE GRILLE  -->
        <div *ngIf="!loading && paginatedCourses.length > 0 && viewMode === 'grid'" class="row">
          <div class="col-xl-4 col-md-6 d-flex" *ngFor="let course of paginatedCourses">
            <div class="course-item-two course-item mx-0 flex-fill" style="cursor:pointer;" (click)="goToDetail(course.id)">
              <div class="course-img">
                <img [src]="getImageUrl(course.coverImage)" alt="{{ course.title }}" class="img-fluid" style="height:185px;object-fit:cover;">
                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                  <a href="javascript:void(0);" class="fav-icon ms-auto"
                     [class.selected]="isInWishlist(course.id)"
                     (click)="toggleWishlist(course, $event)"
                     title="{{ isInWishlist(course.id) ? 'Retirer de la wishlist' : 'Ajouter \xE0 la wishlist' }}">
                    <i class="isax isax-heart"></i>
                  </a>
                </div>
              </div>
              <div class="course-content">
                <div class="d-flex justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <img [src]="getInstructorAvatar(course.instructorAvatar)"
                         class="img-fluid avatar avatar-sm rounded-circle" alt="instructor">
                    <div class="ms-2">
                      <span class="link-default fs-14">{{ course.instructorName }}</span>
                    </div>
                  </div>
                  <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                    {{ course.categoryName || 'Cours' }}
                  </span>
                </div>
                <h6 class="title mb-2">{{ course.title }}</h6>
                <p class="d-flex align-items-center mb-3" *ngIf="course.averageRating; else noRating">
                  <i class="fa-solid fa-star text-warning me-2"></i>
                  {{ course.averageRating | number:'1.1-1' }} ({{ course.reviewCount || 0 }} avis)
                </p>
                <ng-template #noRating>
                  <p class="d-flex align-items-center mb-3 text-muted small">
                    <i class="fa-regular fa-star me-2"></i>Aucun avis
                  </p>
                </ng-template>
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="text-secondary mb-0">{{ formatPrice(course) }}</h5>
                  <ng-container *ngIf="isEnrolled(course.id); else notEnrolledGrid">
                    <a routerLink="/student/student-my-courses" class="btn btn-success btn-sm d-inline-flex align-items-center" (click)="$event.stopPropagation()">
                      Acc\xE9der<i class="isax isax-arrow-right-3 ms-1"></i>
                    </a>
                  </ng-container>
                  <ng-template #notEnrolledGrid>
                    <div class="d-flex gap-1">
                      <a href="javascript:void(0);" (click)="addToCart(course.id, $event)" class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center" title="Ajouter au panier">
                        <i class="isax isax-shopping-cart me-1"></i>Panier
                      </a>
                      <a href="javascript:void(0);" (click)="goToDetail(course.id); $event.stopPropagation()" class="btn btn-dark btn-sm d-inline-flex align-items-center">
                        Voir<i class="isax isax-arrow-right-3 ms-1"></i>
                      </a>
                    </div>
                  </ng-template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /VUE GRILLE -->

        <!--  VUE LISTE  -->
        <div *ngIf="!loading && paginatedCourses.length > 0 && viewMode === 'list'" class="row course-list-wrap">
          <div class="col-12" *ngFor="let course of paginatedCourses">
            <div class="courses-list-item" style="cursor:pointer;" (click)="goToDetail(course.id)">
              <div class="d-md-flex align-items-center">
                <div class="position-relative overflow-hidden rounded-3 card-image">
                  <img [src]="getImageUrl(course.coverImage)" class="img-fluid rounded-3" alt="{{ course.title }}" style="min-height:120px;object-fit:cover;">
                  <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a href="javascript:void(0);" class="like"
                       [class.selected]="isInWishlist(course.id)"
                       (click)="toggleWishlist(course, $event)">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                  <div class="d-flex flex-wrap align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                      <img [src]="getInstructorAvatar(course.instructorAvatar)"
                           class="img-fluid rounded-circle me-2" style="width:28px;height:28px;object-fit:cover;" alt="">
                      <p class="mb-0">{{ course.instructorName }}</p>
                    </div>
                    <span>
                      <a href="javascript:void(0);" class="tag-btn" (click)="$event.stopPropagation()">{{ course.categoryName || 'Cours' }}</a>
                    </span>
                  </div>
                  <h4 class="mt-3 mb-2">{{ course.title }}</h4>
                  <div class="d-flex align-items-center" *ngIf="course.averageRating">
                    <p class="d-flex align-items-center mb-0">
                      <i class="fa-solid fa-star text-warning me-2"></i>
                      {{ course.averageRating | number:'1.1-1' }} ({{ course.reviewCount || 0 }} avis)
                    </p>
                    <span class="dot"></span>
                    <p class="mb-0">{{ getLevelLabel(course.level) }}</p>
                  </div>
                  <div class="d-flex justify-content-between mt-3 align-items-center">
                    <h5 class="text-secondary">{{ formatPrice(course) }}</h5>
                    <ng-container *ngIf="isEnrolled(course.id); else notEnrolledList">
                      <a routerLink="/student/student-my-courses" class="btn btn-success btn-sm d-inline-flex align-items-center" (click)="$event.stopPropagation()">
                        Acc\xE9der<i class="fs-8 fas fa-angle-right ms-2"></i>
                      </a>
                    </ng-container>
                    <ng-template #notEnrolledList>
                      <div class="d-flex gap-2">
                        <a href="javascript:void(0);" (click)="addToCart(course.id, $event)" class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center" title="Ajouter au panier">
                          <i class="isax isax-shopping-cart me-1"></i>Panier
                        </a>
                        <a href="javascript:void(0);" (click)="goToDetail(course.id); $event.stopPropagation()" class="btn btn-dark btn-sm d-inline-flex align-items-center">
                          Voir le cours<i class="fs-8 fas fa-angle-right ms-2"></i>
                        </a>
                      </div>
                    </ng-template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /VUE LISTE -->

        <!--  PAGINATION  -->
        <div *ngIf="!loading && totalPages > 1" class="row align-items-center mt-4">
          <div class="col-md-2">
            <p class="pagination-text">Page {{ currentPage }} sur {{ totalPages }}</p>
          </div>
          <div class="col-md-10">
            <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
              <li class="page-item prev" [class.disabled]="currentPage === 1">
                <a class="page-link" href="javascript:void(0)" (click)="goToPage(currentPage - 1)">
                  <i class="fas fa-angle-left"></i>
                </a>
              </li>
              <li *ngIf="currentPage > 3" class="page-item">
                <a class="page-link" href="javascript:void(0)" (click)="goToPage(1)">1</a>
              </li>
              <li *ngIf="currentPage > 4" class="page-item disabled">
                <a class="page-link">...</a>
              </li>
              <li *ngFor="let p of getPageRange()" class="page-item" [class.active]="p === currentPage">
                <a class="page-link" href="javascript:void(0)" (click)="goToPage(p)">{{ p }}</a>
              </li>
              <li *ngIf="currentPage < totalPages - 3" class="page-item disabled">
                <a class="page-link">...</a>
              </li>
              <li *ngIf="currentPage < totalPages - 2" class="page-item">
                <a class="page-link" href="javascript:void(0)" (click)="goToPage(totalPages)">{{ totalPages }}</a>
              </li>
              <li class="page-item next" [class.disabled]="currentPage === totalPages">
                <a class="page-link" href="javascript:void(0)" (click)="goToPage(currentPage + 1)">
                  <i class="fas fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- /PAGINATION -->

      </div>
      <!-- /Contenu principal -->

    </div>
  </div>
</section>
`, styles: ["/* src/app/features/courses/course-list-public/course-list-public.component.scss */\n.course-card {\n  transition: transform 0.3s, box-shadow 0.3s;\n  border: none;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.course-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;\n}\n.card-img-top {\n  transition: transform 0.3s;\n}\n.course-card:hover .card-img-top {\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=course-list-public.component.css.map */\n"] }]
  }], () => [{ type: CourseService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseListPublicComponent, { className: "CourseListPublicComponent", filePath: "src/app/features/courses/course-list-public/course-list-public.component.ts", lineNumber: 17 });
})();
export {
  CourseListPublicComponent
};
//# sourceMappingURL=chunk-YBWOFYKB.js.map
