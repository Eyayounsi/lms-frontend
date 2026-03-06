import {
  require_sweetalert2_all
} from "./chunk-GO5GBTKS.js";
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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import {
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-course/instructor-course.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function InstructorCourseComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_1_Template_button_click_3_listener() {
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
function InstructorCourseComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_2_Template_button_click_3_listener() {
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
function InstructorCourseComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementStart(2, "p", 40);
    \u0275\u0275text(3, "Chargement de vos cours...");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "h5", 42);
    \u0275\u0275text(3, "Aucun cours trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42)(5, "a", 43);
    \u0275\u0275text(6, "Cr\xE9ez votre premier cours");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r1.routes.addCourse);
  }
}
function InstructorCourseComponent_div_61_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2, "Modification en attente ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseComponent_div_61_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Rejet\xE9 :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", course_r5.rejectionReason, " ");
  }
}
function InstructorCourseComponent_div_61_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Modification rejet\xE9e :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", course_r5.editRejectionReason, " ");
  }
}
function InstructorCourseComponent_div_61_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_61_div_1_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const course_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitForReview(course_r5));
    });
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275text(2, "Soumettre pour validation ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseComponent_div_61_div_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_61_div_1_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const course_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveCourse(course_r5));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2, "Archiver ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseComponent_div_61_div_1_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_61_div_1_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const course_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(course_r5));
    });
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2, "Supprimer ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseComponent_div_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 6)(2, "div", 46)(3, "div", 47);
    \u0275\u0275element(4, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49)(6, "div", 50)(7, "h5", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InstructorCourseComponent_div_61_div_1_span_11_Template, 3, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 54);
    \u0275\u0275element(13, "i", 55);
    \u0275\u0275text(14);
    \u0275\u0275element(15, "i", 56);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275element(18, "i", 57);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 58);
    \u0275\u0275element(21, "i", 59);
    \u0275\u0275text(22);
    \u0275\u0275element(23, "i", 60);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, InstructorCourseComponent_div_61_div_1_div_25_Template, 5, 1, "div", 61)(26, InstructorCourseComponent_div_61_div_1_div_26_Template, 5, 1, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 63)(28, "button", 64);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_61_div_1_Template_button_click_28_listener() {
      const course_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetails(course_r5.id));
    });
    \u0275\u0275element(29, "i", 65);
    \u0275\u0275text(30, "D\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 66);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_61_div_1_Template_button_click_31_listener() {
      const course_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editCourse(course_r5.id));
    });
    \u0275\u0275element(32, "i", 67);
    \u0275\u0275text(33, "Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, InstructorCourseComponent_div_61_div_1_button_34_Template, 3, 0, "button", 68)(35, InstructorCourseComponent_div_61_div_1_button_35_Template, 3, 0, "button", 69)(36, InstructorCourseComponent_div_61_div_1_button_36_Template, 3, 0, "button", 70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getImageUrl(course_r5.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(course_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(course_r5.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.hasPendingEdit);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getLevelLabel(course_r5.level), " \xA0|\xA0 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 15, course_r5.price, "1.2-2"), " \xA0|\xA0 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", course_r5.enrollmentCount || 0, " inscrit(s) ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", course_r5.sectionsCount || 0, " section(s) \xA0|\xA0 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", course_r5.lessonsCount || 0, " le\xE7on(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.status === "REJECTED" && course_r5.rejectionReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.editRejectionReason);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", course_r5.status === "DRAFT" || course_r5.status === "REJECTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.status === "PUBLISHED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.status === "DRAFT" || course_r5.status === "REJECTED" || course_r5.status === "ARCHIVED");
  }
}
function InstructorCourseComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, InstructorCourseComponent_div_61_div_1_Template, 37, 18, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredCourses);
  }
}
function InstructorCourseComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "div", 85)(4, "div", 86);
    \u0275\u0275element(5, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 88);
    \u0275\u0275text(7, "Supprimer le cours ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 89);
    \u0275\u0275text(9, " \xCAtes-vous s\xFBr de vouloir supprimer ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " ?");
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14, " Cette action est irr\xE9versible. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 90)(16, "button", 91);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_62_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(17, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 92);
    \u0275\u0275listener("click", function InstructorCourseComponent_div_62_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
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
var InstructorCourseComponent = class _InstructorCourseComponent {
  courseService;
  router;
  routes = routes;
  courses = [];
  filteredCourses = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  searchTerm = "";
  selectedStatus = "";
  // Stats
  publishedCount = 0;
  pendingCount = 0;
  draftCount = 0;
  rejectedCount = 0;
  // Modal delete
  courseToDelete = null;
  showDeleteModal = false;
  constructor(courseService, router) {
    this.courseService = courseService;
    this.router = router;
  }
  ngOnInit() {
    this.loadCourses();
  }
  loadCourses() {
    this.loading = true;
    this.courseService.getMyCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.applyFilters();
        this.computeStats();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Erreur lors du chargement des cours";
        this.loading = false;
        console.error(err);
      }
    });
  }
  computeStats() {
    this.publishedCount = this.courses.filter((c) => c.status === "PUBLISHED").length;
    this.pendingCount = this.courses.filter((c) => c.status === "PENDING").length;
    this.draftCount = this.courses.filter((c) => c.status === "DRAFT").length;
    this.rejectedCount = this.courses.filter((c) => c.status === "REJECTED").length;
  }
  applyFilters() {
    this.filteredCourses = this.courses.filter((c) => {
      const matchSearch = !this.searchTerm || c.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchStatus = !this.selectedStatus || c.status === this.selectedStatus;
      return matchSearch && matchStatus;
    });
  }
  // Soumettre un cours DRAFT pour revue
  submitForReview(course) {
    import_sweetalert2.default.fire({
      icon: "warning",
      title: "Soumettre pour validation ?",
      html: `<b>${course.title}</b><br><br>
             Une fois soumis, <b>vous ne pourrez plus modifier ce cours</b><br>
             tant qu'il est en attente de validation par l'administrateur.`,
      confirmButtonText: '<i class="isax isax-send me-1"></i> Confirmer',
      cancelButtonText: "Annuler",
      confirmButtonColor: "#d63384",
      cancelButtonColor: "#6c757d",
      showCancelButton: true,
      timer: 1e4,
      timerProgressBar: true,
      allowOutsideClick: false,
      reverseButtons: true
    }).then((result) => {
      if (!result.isConfirmed)
        return;
      this.courseService.submitForReview(course.id).subscribe({
        next: () => {
          this.showSuccess("Cours soumis pour validation !");
          this.loadCourses();
        },
        error: (err) => this.errorMessage = err.error?.message || "Erreur lors de la soumission"
      });
    });
  }
  // Archiver un cours PUBLISHED
  archiveCourse(course) {
    if (!confirm(`Archiver le cours "${course.title}" ? Il ne sera plus visible par les \xE9tudiants.`))
      return;
    this.courseService.archiveCourse(course.id).subscribe({
      next: () => {
        this.showSuccess("Cours archiv\xE9 avec succ\xE8s");
        this.loadCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors de l'archivage"
    });
  }
  // Ouvrir modal de suppression
  openDeleteModal(course) {
    this.courseToDelete = course;
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.courseToDelete = null;
    this.showDeleteModal = false;
  }
  confirmDelete() {
    if (!this.courseToDelete)
      return;
    this.courseService.deleteCourse(this.courseToDelete.id).subscribe({
      next: () => {
        this.showSuccess("Cours supprim\xE9");
        this.closeDeleteModal();
        this.loadCourses();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur lors de la suppression";
        this.closeDeleteModal();
      }
    });
  }
  // Naviguer vers l'édition du cours
  editCourse(courseId) {
    this.router.navigate([this.routes.addCourse], { queryParams: { id: courseId } });
  }
  // Naviguer vers les détails du cours
  viewDetails(courseId) {
    this.router.navigate(["/instructor/instructor-course-detail"], { queryParams: { courseId } });
  }
  // Badges de statut
  getStatusBadgeClass(status) {
    switch (status) {
      case "PUBLISHED":
        return "bg-success";
      case "PENDING":
        return "bg-warning text-dark";
      case "DRAFT":
        return "bg-secondary";
      case "REJECTED":
        return "bg-danger";
      case "ARCHIVED":
        return "bg-dark";
      default:
        return "bg-secondary";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "PUBLISHED":
        return "Publi\xE9";
      case "PENDING":
        return "En attente";
      case "DRAFT":
        return "Brouillon";
      case "REJECTED":
        return "Rejet\xE9";
      case "ARCHIVED":
        return "Archiv\xE9";
      default:
        return status;
    }
  }
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
  showSuccess(msg) {
    this.successMessage = msg;
    this.errorMessage = "";
    setTimeout(() => this.successMessage = "", 3500);
  }
  static \u0275fac = function InstructorCourseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorCourseComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseComponent, selectors: [["app-instructor-course"]], decls: 63, vars: 13, consts: [[1, "page-content"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-xxl", "col-lg-3", "col-md-6"], [1, "card", "bg-success"], [1, "card-body"], [1, "fw-medium", "mb-1", "text-white"], [1, "fw-bold", "text-white"], [1, "card", "bg-warning"], [1, "card", "bg-secondary"], [1, "card", "bg-danger"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0"], [1, "fa-solid", "fa-graduation-cap", "me-2"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa-solid", "fa-plus", "me-1"], [1, "col-md-7"], [1, "input-group"], [1, "input-group-text"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Rechercher un cours...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "col-md-5"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "DRAFT"], ["value", "PENDING"], ["value", "PUBLISHED"], ["value", "REJECTED"], ["value", "ARCHIVED"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", "style", "background-color: rgba(0,0,0,0.5);", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-book-open", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "text-primary", 3, "routerLink"], ["class", "card mb-3 shadow-sm", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "shadow-sm"], [1, "row", "align-items-center"], [1, "col-md-2"], ["alt", "cover", 1, "img-fluid", "rounded", 2, "height", "90px", "width", "100%", "object-fit", "cover", 3, "src"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "mb-0"], [1, "badge", 3, "ngClass"], ["class", "badge bg-primary", 4, "ngIf"], [1, "text-muted", "small", "mb-1"], [1, "fa-solid", "fa-signal", "me-1"], [1, "fa-solid", "fa-euro-sign", "me-1"], [1, "fa-solid", "fa-users", "me-1"], [1, "text-muted", "small", "mb-0"], [1, "fa-solid", "fa-layer-group", "me-1"], [1, "fa-solid", "fa-play-circle", "me-1"], ["class", "alert alert-danger py-1 px-2 mt-2 mb-0 small", 4, "ngIf"], ["class", "alert alert-warning py-1 px-2 mt-2 mb-0 small", 4, "ngIf"], [1, "col-md-4", "text-end", "d-flex", "flex-column", "align-items-end", "gap-2"], [1, "btn", "btn-outline-info", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-eye", "me-1"], [1, "btn", "btn-outline-primary", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-pen", "me-1"], ["class", "btn btn-warning btn-sm w-100", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary btn-sm w-100", 3, "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm w-100", 3, "click", 4, "ngIf"], [1, "badge", "bg-primary"], [1, "fa-solid", "fa-pen-to-square", "me-1"], [1, "alert", "alert-danger", "py-1", "px-2", "mt-2", "mb-0", "small"], [1, "fa-solid", "fa-ban", "me-1"], [1, "alert", "alert-warning", "py-1", "px-2", "mt-2", "mb-0", "small"], [1, "btn", "btn-warning", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-paper-plane", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-archive", "me-1"], [1, "btn", "btn-danger", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-trash", "me-1"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "py-4"], [1, "mb-3", 2, "width", "60px", "height", "60px", "background", "rgba(220,53,69,0.1)", "border-radius", "50%", "display", "inline-flex", "align-items", "center", "justify-content", "center"], [1, "fa-solid", "fa-trash", "fa-xl", "text-danger"], [1, "mb-2"], [1, "text-muted", "mb-4"], [1, "d-flex", "justify-content-center", "gap-2"], [1, "btn", "btn-light", "rounded-pill", "px-4", 3, "click"], [1, "btn", "btn-danger", "rounded-pill", "px-4", 3, "click"]], template: function InstructorCourseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, InstructorCourseComponent_div_1_Template, 4, 1, "div", 1)(2, InstructorCourseComponent_div_2_Template, 4, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h6", 7);
      \u0275\u0275text(8, "Cours Publi\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h4", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 4)(12, "div", 9)(13, "div", 6)(14, "h6", 7);
      \u0275\u0275text(15, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h4", 8);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 4)(19, "div", 10)(20, "div", 6)(21, "h6", 7);
      \u0275\u0275text(22, "Brouillons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h4", 8);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 4)(26, "div", 11)(27, "div", 6)(28, "h6", 7);
      \u0275\u0275text(29, "Rejet\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h4", 8);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 12)(33, "h5", 13);
      \u0275\u0275element(34, "i", 14);
      \u0275\u0275text(35, "Mes Cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 15);
      \u0275\u0275element(37, "i", 16);
      \u0275\u0275text(38, "Nouveau cours ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 3)(40, "div", 17)(41, "div", 18)(42, "span", 19);
      \u0275\u0275element(43, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function InstructorCourseComponent_Template_input_input_44_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 22)(46, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseComponent_Template_select_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InstructorCourseComponent_Template_select_change_46_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(47, "option", 24);
      \u0275\u0275text(48, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 25);
      \u0275\u0275text(50, "Brouillon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 26);
      \u0275\u0275text(52, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "option", 27);
      \u0275\u0275text(54, "Publi\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "option", 28);
      \u0275\u0275text(56, "Rejet\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "option", 29);
      \u0275\u0275text(58, "Archiv\xE9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(59, InstructorCourseComponent_div_59_Template, 4, 0, "div", 30)(60, InstructorCourseComponent_div_60_Template, 7, 1, "div", 30)(61, InstructorCourseComponent_div_61_Template, 2, 1, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, InstructorCourseComponent_div_62_Template, 20, 1, "div", 32);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.publishedCount);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.pendingCount);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.draftCount);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.rejectedCount);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.addCourse);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCourses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCourses.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorCourseComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-course", imports: [CommonModule, FormsModule, RouterLink], template: `<div class="page-content">

  <!-- Messages -->
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show">
    <i class="fa-solid fa-check-circle me-2"></i>{{ successMessage }}
    <button type="button" class="btn-close" (click)="successMessage = ''"></button>
  </div>
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show">
    <i class="fa-solid fa-exclamation-circle me-2"></i>{{ errorMessage }}
    <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
  </div>

  <!-- Stats Cards -->
  <div class="row mb-4">
    <div class="col-xxl col-lg-3 col-md-6">
      <div class="card bg-success">
        <div class="card-body">
          <h6 class="fw-medium mb-1 text-white">Cours Publi\xE9s</h6>
          <h4 class="fw-bold text-white">{{ publishedCount }}</h4>
        </div>
      </div>
    </div>
    <div class="col-xxl col-lg-3 col-md-6">
      <div class="card bg-warning">
        <div class="card-body">
          <h6 class="fw-medium mb-1 text-white">En attente</h6>
          <h4 class="fw-bold text-white">{{ pendingCount }}</h4>
        </div>
      </div>
    </div>
    <div class="col-xxl col-lg-3 col-md-6">
      <div class="card bg-secondary">
        <div class="card-body">
          <h6 class="fw-medium mb-1 text-white">Brouillons</h6>
          <h4 class="fw-bold text-white">{{ draftCount }}</h4>
        </div>
      </div>
    </div>
    <div class="col-xxl col-lg-3 col-md-6">
      <div class="card bg-danger">
        <div class="card-body">
          <h6 class="fw-medium mb-1 text-white">Rejet\xE9s</h6>
          <h4 class="fw-bold text-white">{{ rejectedCount }}</h4>
        </div>
      </div>
    </div>
  </div>

  <!-- Header -->
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h5 class="fw-bold mb-0"><i class="fa-solid fa-graduation-cap me-2"></i>Mes Cours</h5>
    <a [routerLink]="routes.addCourse" class="btn btn-primary">
      <i class="fa-solid fa-plus me-1"></i>Nouveau cours
    </a>
  </div>

  <!-- Filtres -->
  <div class="row mb-4">
    <div class="col-md-7">
      <div class="input-group">
        <span class="input-group-text"><i class="fa-solid fa-search"></i></span>
        <input type="text" class="form-control" [(ngModel)]="searchTerm"
               (input)="applyFilters()" placeholder="Rechercher un cours...">
      </div>
    </div>
    <div class="col-md-5">
      <select class="form-select" [(ngModel)]="selectedStatus" (change)="applyFilters()">
        <option value="">Tous les statuts</option>
        <option value="DRAFT">Brouillon</option>
        <option value="PENDING">En attente</option>
        <option value="PUBLISHED">Publi\xE9</option>
        <option value="REJECTED">Rejet\xE9</option>
        <option value="ARCHIVED">Archiv\xE9</option>
      </select>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="text-center py-5">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="mt-2 text-muted">Chargement de vos cours...</p>
  </div>

  <!-- Aucun cours -->
  <div *ngIf="!loading && filteredCourses.length === 0" class="text-center py-5">
    <i class="fa-solid fa-book-open fa-3x text-muted mb-3"></i>
    <h5 class="text-muted">Aucun cours trouv\xE9</h5>
    <p class="text-muted">
      <a [routerLink]="routes.addCourse" class="text-primary">Cr\xE9ez votre premier cours</a>
    </p>
  </div>

  <!-- Liste des cours -->
  <div *ngIf="!loading && filteredCourses.length > 0">
    <div class="card mb-3 shadow-sm" *ngFor="let course of filteredCourses">
      <div class="card-body">
        <div class="row align-items-center">

          <!-- Image -->
          <div class="col-md-2">
            <img [src]="getImageUrl(course.coverImage)" class="img-fluid rounded"
                 style="height: 90px; width: 100%; object-fit: cover;" alt="cover">
          </div>

          <!-- Info -->
          <div class="col-md-6">
            <div class="d-flex align-items-center gap-2 mb-1">
              <h5 class="mb-0">{{ course.title }}</h5>
              <span class="badge" [ngClass]="getStatusBadgeClass(course.status)">
                {{ getStatusLabel(course.status) }}
              </span>
              <span *ngIf="course.hasPendingEdit" class="badge bg-primary">
                <i class="fa-solid fa-pen-to-square me-1"></i>Modification en attente
              </span>
            </div>
            <p class="text-muted small mb-1">
              <i class="fa-solid fa-signal me-1"></i>{{ getLevelLabel(course.level) }}
              &nbsp;|&nbsp;
              <i class="fa-solid fa-euro-sign me-1"></i>{{ course.price | number:'1.2-2' }}
              &nbsp;|&nbsp;
              <i class="fa-solid fa-users me-1"></i>{{ course.enrollmentCount || 0 }} inscrit(s)
            </p>
            <p class="text-muted small mb-0">
              <i class="fa-solid fa-layer-group me-1"></i>{{ course.sectionsCount || 0 }} section(s)
              &nbsp;|&nbsp;
              <i class="fa-solid fa-play-circle me-1"></i>{{ course.lessonsCount || 0 }} le\xE7on(s)
            </p>
            <!-- Message rejet -->
            <div *ngIf="course.status === 'REJECTED' && course.rejectionReason"
                 class="alert alert-danger py-1 px-2 mt-2 mb-0 small">
              <i class="fa-solid fa-ban me-1"></i><strong>Rejet\xE9 :</strong> {{ course.rejectionReason }}
            </div>
            <!-- Message rejet modification -->
            <div *ngIf="course.editRejectionReason"
                 class="alert alert-warning py-1 px-2 mt-2 mb-0 small">
              <i class="fa-solid fa-pen me-1"></i><strong>Modification rejet\xE9e :</strong> {{ course.editRejectionReason }}
            </div>
          </div>

          <!-- Actions -->
          <div class="col-md-4 text-end d-flex flex-column align-items-end gap-2">
            <button class="btn btn-outline-info btn-sm w-100" (click)="viewDetails(course.id)">
              <i class="fa-solid fa-eye me-1"></i>D\xE9tails
            </button>
            <button class="btn btn-outline-primary btn-sm w-100" (click)="editCourse(course.id)">
              <i class="fa-solid fa-pen me-1"></i>Modifier
            </button>
            <button *ngIf="course.status === 'DRAFT' || course.status === 'REJECTED'"
                    class="btn btn-warning btn-sm w-100" (click)="submitForReview(course)">
              <i class="fa-solid fa-paper-plane me-1"></i>Soumettre pour validation
            </button>
            <button *ngIf="course.status === 'PUBLISHED'"
                    class="btn btn-outline-secondary btn-sm w-100" (click)="archiveCourse(course)">
              <i class="fa-solid fa-archive me-1"></i>Archiver
            </button>
            <button *ngIf="course.status === 'DRAFT' || course.status === 'REJECTED' || course.status === 'ARCHIVED'"
                    class="btn btn-danger btn-sm w-100" (click)="openDeleteModal(course)">
              <i class="fa-solid fa-trash me-1"></i>Supprimer
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>

<!-- Modal Suppression -->
<div *ngIf="showDeleteModal" class="modal fade show d-block" tabindex="-1"
     style="background-color: rgba(0,0,0,0.5);">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center py-4">
        <div class="mb-3" style="width:60px; height:60px; background:rgba(220,53,69,0.1); border-radius:50%; display:inline-flex; align-items:center; justify-content:center;">
          <i class="fa-solid fa-trash fa-xl text-danger"></i>
        </div>
        <h5 class="mb-2">Supprimer le cours ?</h5>
        <p class="text-muted mb-4">
          \xCAtes-vous s\xFBr de vouloir supprimer <strong>{{ courseToDelete?.title }}</strong> ?<br>
          Cette action est irr\xE9versible.
        </p>
        <div class="d-flex justify-content-center gap-2">
          <button class="btn btn-light rounded-pill px-4" (click)="closeDeleteModal()">Annuler</button>
          <button class="btn btn-danger rounded-pill px-4" (click)="confirmDelete()">Oui, supprimer</button>
        </div>
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: CourseService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseComponent, { className: "InstructorCourseComponent", filePath: "src/app/features/instructor/instructor-course/instructor-course.component.ts", lineNumber: 15 });
})();
export {
  InstructorCourseComponent
};
//# sourceMappingURL=chunk-UFIMPHUS.js.map
