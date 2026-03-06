import {
  ProfileService
} from "./chunk-TQDXDFIT.js";
import {
  ToastrService
} from "./chunk-OUV4FBMT.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-profile/student-profile.component.ts
function StudentProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3, "Chargement du profil...");
    \u0275\u0275elementEnd()();
  }
}
function StudentProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage, " ");
  }
}
function StudentProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    \u0275\u0275element(4, "img", 17);
    \u0275\u0275elementStart(5, "label", 18);
    \u0275\u0275element(6, "i", 19);
    \u0275\u0275elementStart(7, "input", 20);
    \u0275\u0275listener("change", function StudentProfileComponent_div_7_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAvatarSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div")(9, "h5", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.getAvatarUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile.email);
  }
}
function StudentProfileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 14)(2, "h6", 24);
    \u0275\u0275text(3, "Informations personnelles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "div", 26)(6, "div", 27)(7, "h6", 28);
    \u0275\u0275text(8, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 26)(12, "div", 27)(13, "h6", 28);
    \u0275\u0275text(14, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 29);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 26)(18, "div", 27)(19, "h6", 28);
    \u0275\u0275text(20, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 29);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 26)(24, "div", 27)(25, "h6", 28);
    \u0275\u0275text(26, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 29);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 26)(30, "div", 27)(31, "h6", 28);
    \u0275\u0275text(32, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 29);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 30)(36, "a", 31);
    \u0275\u0275element(37, "i", 32);
    \u0275\u0275text(38, "Modifier le profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "a", 33);
    \u0275\u0275element(40, "i", 34);
    \u0275\u0275text(41, "Changer le mot de passe ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.getFirstName());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getLastName() || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile.fullName || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile.email || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile.phone || "Non renseign\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.studentSettings);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.studentChangePassword);
  }
}
var StudentProfileComponent = class _StudentProfileComponent {
  profileService;
  toastr;
  routes = routes;
  profile = null;
  loading = true;
  errorMessage = "";
  avatarPreview = null;
  constructor(profileService, toastr) {
    this.profileService = profileService;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur chargement profil:", err);
        this.errorMessage = "Impossible de charger le profil. V\xE9rifiez votre connexion.";
        this.loading = false;
      }
    });
  }
  getAvatarUrl() {
    if (this.avatarPreview)
      return this.avatarPreview;
    if (!this.profile?.avatarPath)
      return "assets/img/profiles/avatar-02.jpg";
    const p = this.profile.avatarPath;
    if (p.startsWith("http"))
      return p;
    return "http://localhost:8081/" + (p.startsWith("/") ? p.substring(1) : p);
  }
  onAvatarSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.avatarPreview = e.target?.result;
    };
    reader.readAsDataURL(file);
    this.profileService.uploadAvatar(file).subscribe({
      next: (res) => {
        if (this.profile)
          this.profile.avatarPath = res.avatarPath;
        this.toastr.success("Avatar mis \xE0 jour !");
      },
      error: () => {
        this.toastr.error("Erreur lors de l'upload");
      }
    });
  }
  /** Extrait le prénom (tout sauf le dernier mot) */
  getFirstName() {
    if (!this.profile?.fullName)
      return "\u2014";
    const parts = this.profile.fullName.trim().split(" ");
    return parts.length > 1 ? parts.slice(0, -1).join(" ") : parts[0];
  }
  /** Extrait le nom de famille (dernier mot) */
  getLastName() {
    if (!this.profile?.fullName)
      return "\u2014";
    const parts = this.profile.fullName.trim().split(" ");
    return parts.length > 1 ? parts[parts.length - 1] : "";
  }
  static \u0275fac = function StudentProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentProfileComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentProfileComponent, selectors: [["app-student-profile"]], decls: 9, vars: 5, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], ["title", "Modifier le profil", 1, "edit-profile-icon", 3, "routerLink"], [1, "isax", "isax-edit-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "card mb-3", 4, "ngIf"], ["class", "card mb-0", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "alert", "alert-danger"], [1, "isax", "isax-warning-2", "me-2"], [1, "card", "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "position-relative", "me-3"], ["width", "80", "height", "80", "alt", "Avatar", 1, "rounded-circle", 2, "object-fit", "cover", 3, "src"], ["title", "Changer l'avatar", 1, "position-absolute", "bottom-0", "end-0", "bg-secondary", "text-white", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "28px", "height", "28px", "cursor", "pointer"], [1, "isax", "isax-camera", "fs-14"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "card", "mb-0"], [1, "fs-18", "page-title", "fw-bold"], [1, "row"], [1, "col-md-4"], [1, "mb-3"], [1, "text-muted", "small", "mb-1"], [1, "fw-medium"], [1, "mt-3", "pt-3", "border-top"], [1, "btn", "btn-secondary", "btn-sm", "rounded-pill", 3, "routerLink"], [1, "isax", "isax-edit-2", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", "rounded-pill", "ms-2", 3, "routerLink"], [1, "isax", "isax-lock", "me-1"]], template: function StudentProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Mon Profil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, StudentProfileComponent_div_5_Template, 4, 0, "div", 4)(6, StudentProfileComponent_div_6_Template, 3, 1, "div", 5)(7, StudentProfileComponent_div_7_Template, 13, 3, "div", 6)(8, StudentProfileComponent_div_8_Template, 42, 7, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentSettings);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.profile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.profile);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentProfileComponent, [{
    type: Component,
    args: [{ selector: "app-student-profile", imports: [CommonModule, RouterLink], template: `
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5 class="fw-bold">Mon Profil</h5>
        <a [routerLink]="routes.studentSettings" class="edit-profile-icon" title="Modifier le profil">
            <i class="isax isax-edit-2"></i>
        </a>
    </div>

    <!-- Chargement -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2 text-muted">Chargement du profil...</p>
    </div>

    <!-- Erreur -->
    <div *ngIf="errorMessage" class="alert alert-danger">
        <i class="isax isax-warning-2 me-2"></i>{{ errorMessage }}
    </div>

    <!-- Donn\xE9es r\xE9elles -->
    <div class="card mb-3" *ngIf="!loading && profile">
        <div class="card-body">
            <div class="d-flex align-items-center">
                <div class="position-relative me-3">
                    <img [src]="getAvatarUrl()" class="rounded-circle" width="80" height="80" style="object-fit:cover;" alt="Avatar">
                    <label class="position-absolute bottom-0 end-0 bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
                           style="width:28px;height:28px;cursor:pointer;" title="Changer l'avatar">
                        <i class="isax isax-camera fs-14"></i>
                        <input type="file" accept="image/*" class="d-none" (change)="onAvatarSelected($event)">
                    </label>
                </div>
                <div>
                    <h5 class="mb-1">{{ profile.fullName }}</h5>
                    <p class="text-muted mb-0">{{ profile.email }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-0" *ngIf="!loading && profile">
        <div class="card-body">
            <h6 class="fs-18 page-title fw-bold">Informations personnelles</h6>
            <div class="row">
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6 class="text-muted small mb-1">Pr\xE9nom</h6>
                        <span class="fw-medium">{{ getFirstName() }}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6 class="text-muted small mb-1">Nom</h6>
                        <span class="fw-medium">{{ getLastName() || '\u2014' }}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6 class="text-muted small mb-1">Nom complet</h6>
                        <span class="fw-medium">{{ profile.fullName || '\u2014' }}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6 class="text-muted small mb-1">Email</h6>
                        <span class="fw-medium">{{ profile.email || '\u2014' }}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6 class="text-muted small mb-1">T\xE9l\xE9phone</h6>
                        <span class="fw-medium">{{ profile.phone || 'Non renseign\xE9' }}</span>
                    </div>
                </div>
            </div>

            <div class="mt-3 pt-3 border-top">
                <a [routerLink]="routes.studentSettings" class="btn btn-secondary btn-sm rounded-pill">
                    <i class="isax isax-edit-2 me-1"></i>Modifier le profil
                </a>
                <a [routerLink]="routes.studentChangePassword" class="btn btn-outline-secondary btn-sm rounded-pill ms-2">
                    <i class="isax isax-lock me-1"></i>Changer le mot de passe
                </a>
            </div>
        </div>
    </div>` }]
  }], () => [{ type: ProfileService }, { type: ToastrService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentProfileComponent, { className: "StudentProfileComponent", filePath: "src/app/features/student/student-profile/student-profile.component.ts", lineNumber: 14 });
})();
export {
  StudentProfileComponent
};
//# sourceMappingURL=chunk-MLJPTZRE.js.map
