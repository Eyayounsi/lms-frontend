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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-profile/instructor-profile.component.ts
function InstructorProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3, "Loading profile...");
    \u0275\u0275elementEnd()();
  }
}
function InstructorProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage, "\n");
  }
}
function InstructorProfileComponent_div_7_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "h6");
    \u0275\u0275text(3, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.address);
  }
}
function InstructorProfileComponent_div_7_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div")(2, "h6");
    \u0275\u0275text(3, "Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.bio);
  }
}
function InstructorProfileComponent_div_7_div_45_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h6", 33);
    \u0275\u0275text(2, "Facebook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.profile.facebookUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profile.facebookUrl);
  }
}
function InstructorProfileComponent_div_7_div_45_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h6", 33);
    \u0275\u0275text(2, "Instagram");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.profile.instagramUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profile.instagramUrl);
  }
}
function InstructorProfileComponent_div_7_div_45_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h6", 33);
    \u0275\u0275text(2, "LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.profile.linkedinUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profile.linkedinUrl);
  }
}
function InstructorProfileComponent_div_7_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h5", 22);
    \u0275\u0275text(3, "Social Links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275template(5, InstructorProfileComponent_div_7_div_45_div_5_Template, 5, 2, "div", 31)(6, InstructorProfileComponent_div_7_div_45_div_6_Template, 5, 2, "div", 31)(7, InstructorProfileComponent_div_7_div_45_div_7_Template, 5, 2, "div", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.profile.facebookUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.instagramUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.linkedinUrl);
  }
}
function InstructorProfileComponent_div_7_div_46_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div")(2, "h6", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const edu_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(edu_r3.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", edu_r3.school, " - (", edu_r3.year, ")");
  }
}
function InstructorProfileComponent_div_7_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h5", 22);
    \u0275\u0275text(3, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275template(5, InstructorProfileComponent_div_7_div_46_div_5_Template, 6, 3, "div", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.education);
  }
}
function InstructorProfileComponent_div_7_div_47_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h6", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exp_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(exp_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", exp_r4.company, " - (", exp_r4.period, ")");
  }
}
function InstructorProfileComponent_div_7_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 13)(2, "h5", 22);
    \u0275\u0275text(3, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InstructorProfileComponent_div_7_div_47_div_4_Template, 8, 3, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.experience);
  }
}
function InstructorProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15);
    \u0275\u0275element(5, "img", 16);
    \u0275\u0275elementStart(6, "label", 17);
    \u0275\u0275element(7, "i", 18);
    \u0275\u0275elementStart(8, "input", 19);
    \u0275\u0275listener("change", function InstructorProfileComponent_div_7_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAvatarSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div")(10, "h5", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "h5", 22);
    \u0275\u0275text(17, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 23)(19, "div", 24)(20, "div", 25)(21, "h6");
    \u0275\u0275text(22, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 25)(27, "h6");
    \u0275\u0275text(28, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 24)(32, "div", 25)(33, "h6");
    \u0275\u0275text(34, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 24)(38, "div", 25)(39, "h6");
    \u0275\u0275text(40, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, InstructorProfileComponent_div_7_div_43_Template, 6, 1, "div", 26)(44, InstructorProfileComponent_div_7_div_44_Template, 6, 1, "div", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, InstructorProfileComponent_div_7_div_45_Template, 8, 3, "div", 28)(46, InstructorProfileComponent_div_7_div_46_Template, 6, 1, "div", 28)(47, InstructorProfileComponent_div_7_div_47_Template, 5, 1, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r0.getAvatarUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile.designation || "Instructor");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.getFirstName());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getLastName() || "---");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile.phone || "Not provided");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.bio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.facebookUrl || ctx_r0.profile.instagramUrl || ctx_r0.profile.twitterUrl || ctx_r0.profile.youtubeUrl || ctx_r0.profile.linkedinUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.education.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.experience.length > 0);
  }
}
var InstructorProfileComponent = class _InstructorProfileComponent {
  profileService;
  toastr;
  routes = routes;
  profile = null;
  education = [];
  experience = [];
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
        try {
          this.education = JSON.parse(data.educationJson || "[]");
        } catch {
          this.education = [];
        }
        try {
          this.experience = JSON.parse(data.experienceJson || "[]");
        } catch {
          this.experience = [];
        }
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Impossible de charger le profil.";
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
        this.toastr.success("Avatar updated successfully");
      },
      error: () => {
        this.toastr.error("Failed to upload avatar");
      }
    });
  }
  getFirstName() {
    if (!this.profile?.fullName)
      return "\u2014";
    const parts = this.profile.fullName.trim().split(" ");
    return parts.length > 1 ? parts.slice(0, -1).join(" ") : parts[0];
  }
  getLastName() {
    if (!this.profile?.fullName)
      return "\u2014";
    const parts = this.profile.fullName.trim().split(" ");
    return parts.length > 1 ? parts[parts.length - 1] : "";
  }
  static \u0275fac = function InstructorProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorProfileComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorProfileComponent, selectors: [["app-instructor-profile"]], decls: 8, vars: 4, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], ["title", "Edit Profile", 1, "edit-profile-icon", 3, "routerLink"], [1, "isax", "isax-edit-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "alert", "alert-danger"], [1, "isax", "isax-warning-2", "me-2"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-3"], [1, "position-relative", "me-3"], ["width", "80", "height", "80", "alt", "Avatar", 1, "rounded-circle", 2, "object-fit", "cover", 3, "src"], ["title", "Change Avatar", 1, "position-absolute", "bottom-0", "end-0", "bg-secondary", "text-white", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "28px", "height", "28px", "cursor", "pointer"], [1, "isax", "isax-camera", "fs-14"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "fs-18", "pb-3", "border-bottom", "mb-3"], [1, "row"], [1, "col-md-4"], [1, "mb-3"], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "card mb-0", 4, "ngIf"], [1, "col-md-12"], ["class", "col-md-4 mb-2", 4, "ngIf"], [1, "col-md-4", "mb-2"], [1, "small", "text-muted", "mb-1"], ["target", "_blank", 1, "text-primary", 3, "href"], [1, "education-flow"], ["class", "ps-4 pb-3 timeline-flow", 4, "ngFor", "ngForOf"], [1, "ps-4", "pb-3", "timeline-flow"], [1, "card", "mb-0"], ["class", "d-flex align-items-center mb-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-4"], [1, "bg-light", "border", "avatar", "avatar-lg", "text-gray-9", "flex-shrink-0", "me-3"], [1, "isax", "isax-briefcase", "fw-bold"]], template: function InstructorProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "My Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, InstructorProfileComponent_div_5_Template, 4, 0, "div", 4)(6, InstructorProfileComponent_div_6_Template, 3, 1, "div", 5)(7, InstructorProfileComponent_div_7_Template, 48, 12, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettings);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.profile);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorProfileComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-profile", imports: [CommonModule, RouterLink], template: `<div class="page-title d-flex align-items-center justify-content-between">
    <h5 class="fw-bold">My Profile</h5>
    <a [routerLink]="routes.instructorSettings" class="edit-profile-icon" title="Edit Profile"><i class="isax isax-edit-2"></i></a>
</div>

<!-- Loading -->
<div *ngIf="loading" class="text-center py-5">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="mt-2 text-muted">Loading profile...</p>
</div>

<div *ngIf="errorMessage" class="alert alert-danger">
    <i class="isax isax-warning-2 me-2"></i>{{ errorMessage }}
</div>

<div *ngIf="!loading && profile">

    <!-- Avatar Card -->
    <div class="card">
        <div class="card-body">
            <div class="d-flex align-items-center mb-3">
                <div class="position-relative me-3">
                    <img [src]="getAvatarUrl()" class="rounded-circle" width="80" height="80" style="object-fit:cover;" alt="Avatar">
                    <label class="position-absolute bottom-0 end-0 bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
                           style="width:28px;height:28px;cursor:pointer;" title="Change Avatar">
                        <i class="isax isax-camera fs-14"></i>
                        <input type="file" accept="image/*" class="d-none" (change)="onAvatarSelected($event)">
                    </label>
                </div>
                <div>
                    <h5 class="mb-1">{{ profile.fullName }}</h5>
                    <p class="text-muted mb-0">{{ profile.designation || 'Instructor' }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Basic Info -->
    <div class="card">
        <div class="card-body">
            <h5 class="fs-18 pb-3 border-bottom mb-3">Basic Information</h5>
            <div class="row">
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6>First Name</h6>
                        <span>{{ getFirstName() }}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6>Last Name</h6>
                        <span>{{ getLastName() || '---' }}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6>Phone Number</h6>
                        <span>{{ profile.phone || 'Not provided' }}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <h6>Email</h6>
                        <span>{{ profile.email }}</span>
                    </div>
                </div>
                <div class="col-md-4" *ngIf="profile.address">
                    <div class="mb-3">
                        <h6>Address</h6>
                        <span>{{ profile.address }}</span>
                    </div>
                </div>
                <div class="col-md-12" *ngIf="profile.bio">
                    <div>
                        <h6>Bio</h6>
                        <span>{{ profile.bio }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Social Links -->
    <div class="card" *ngIf="profile.facebookUrl || profile.instagramUrl || profile.twitterUrl || profile.youtubeUrl || profile.linkedinUrl">
        <div class="card-body">
            <h5 class="fs-18 pb-3 border-bottom mb-3">Social Links</h5>
            <div class="row">
                <div class="col-md-4 mb-2" *ngIf="profile.facebookUrl">
                    <h6 class="small text-muted mb-1">Facebook</h6>
                    <a [href]="profile.facebookUrl" target="_blank" class="text-primary">{{ profile.facebookUrl }}</a>
                </div>
                <div class="col-md-4 mb-2" *ngIf="profile.instagramUrl">
                    <h6 class="small text-muted mb-1">Instagram</h6>
                    <a [href]="profile.instagramUrl" target="_blank" class="text-primary">{{ profile.instagramUrl }}</a>
                </div>
                <div class="col-md-4 mb-2" *ngIf="profile.linkedinUrl">
                    <h6 class="small text-muted mb-1">LinkedIn</h6>
                    <a [href]="profile.linkedinUrl" target="_blank" class="text-primary">{{ profile.linkedinUrl }}</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Education -->
    <div class="card" *ngIf="education.length > 0">
        <div class="card-body">
            <h5 class="fs-18 pb-3 border-bottom mb-3">Education</h5>
            <div class="education-flow">
                <div class="ps-4 pb-3 timeline-flow" *ngFor="let edu of education">
                    <div>
                        <h6 class="mb-1">{{ edu.degree }}</h6>
                        <p>{{ edu.school }} - ({{ edu.year }})</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Experience -->
    <div class="card mb-0" *ngIf="experience.length > 0">
        <div class="card-body">
            <h5 class="fs-18 pb-3 border-bottom mb-3">Experience</h5>
            <div class="d-flex align-items-center mb-4" *ngFor="let exp of experience">
                <span class="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3"><i class="isax isax-briefcase fw-bold"></i></span>
                <div>
                    <h6 class="mb-1">{{ exp.title }}</h6>
                    <p>{{ exp.company }} - ({{ exp.period }})</p>
                </div>
            </div>
        </div>
    </div>

</div>\r
` }]
  }], () => [{ type: ProfileService }, { type: ToastrService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorProfileComponent, { className: "InstructorProfileComponent", filePath: "src/app/features/instructor/instructor-profile/instructor-profile.component.ts", lineNumber: 14 });
})();
export {
  InstructorProfileComponent
};
//# sourceMappingURL=chunk-ILSI4F2R.js.map
