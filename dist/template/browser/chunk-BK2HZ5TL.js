import {
  RecruiterService
} from "./chunk-7FFXSULA.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/recruiter/recruiter-shared-profiles/recruiter-shared-profiles.component.ts
function RecruiterSharedProfilesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 22);
    \u0275\u0275text(5, "Chargement des profils...");
    \u0275\u0275elementEnd()();
  }
}
function RecruiterSharedProfilesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function RecruiterSharedProfilesComponent_div_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProfiles());
    });
    \u0275\u0275text(4, "R\xE9essayer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function RecruiterSharedProfilesComponent_div_18_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Essayez avec d'autres mots-cl\xE9s.");
    \u0275\u0275elementEnd();
  }
}
function RecruiterSharedProfilesComponent_div_18_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Aucun \xE9tudiant n'a encore activ\xE9 le partage de profil.");
    \u0275\u0275elementEnd();
  }
}
function RecruiterSharedProfilesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h6", 27);
    \u0275\u0275text(3, "Aucun profil partag\xE9 trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RecruiterSharedProfilesComponent_div_18_p_4_Template, 2, 0, "p", 28)(5, RecruiterSharedProfilesComponent_div_18_p_5_Template, 2, 0, "p", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchQuery);
  }
}
function RecruiterSharedProfilesComponent_div_19_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", profile_r4.bio, " ");
  }
}
function RecruiterSharedProfilesComponent_div_19_div_1_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 45);
    \u0275\u0275listener("click", function RecruiterSharedProfilesComponent_div_19_div_1_a_13_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2, "LinkedIn ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", profile_r4.linkedinUrl, \u0275\u0275sanitizeUrl);
  }
}
function RecruiterSharedProfilesComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275listener("click", function RecruiterSharedProfilesComponent_div_19_div_1_Template_div_click_1_listener() {
      const profile_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewProfile(profile_r4));
    });
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275element(3, "img", 35);
    \u0275\u0275elementStart(4, "h6", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 37);
    \u0275\u0275element(9, "i", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, RecruiterSharedProfilesComponent_div_19_div_1_p_11_Template, 2, 1, "p", 39);
    \u0275\u0275elementStart(12, "div", 40);
    \u0275\u0275template(13, RecruiterSharedProfilesComponent_div_19_div_1_a_13_Template, 3, 1, "a", 41);
    \u0275\u0275elementStart(14, "button", 42);
    \u0275\u0275element(15, "i", 43);
    \u0275\u0275text(16, "Voir ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const profile_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.getAvatarUrl(profile_r4), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(profile_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(profile_r4.designation || "\xC9tudiant");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", profile_r4.email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", profile_r4.bio);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", profile_r4.linkedinUrl);
  }
}
function RecruiterSharedProfilesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, RecruiterSharedProfilesComponent_div_19_div_1_Template, 17, 6, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredProfiles);
  }
}
function RecruiterSharedProfilesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function RecruiterSharedProfilesComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function RecruiterSharedProfilesComponent_div_21_a_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 65);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2, "LinkedIn ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.selectedProfile.linkedinUrl, \u0275\u0275sanitizeUrl);
  }
}
function RecruiterSharedProfilesComponent_div_21_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "h6", 67);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275text(3, "\xC0 propos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedProfile.bio);
  }
}
function RecruiterSharedProfilesComponent_div_21_div_22_li_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const edu_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", edu_r8.school || edu_r8.etablissement, " ");
  }
}
function RecruiterSharedProfilesComponent_div_21_div_22_li_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const edu_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", edu_r8.year || edu_r8.annee, ") ");
  }
}
function RecruiterSharedProfilesComponent_div_21_div_22_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 73)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RecruiterSharedProfilesComponent_div_21_div_22_li_5_span_3_Template, 2, 1, "span", 62)(4, RecruiterSharedProfilesComponent_div_21_div_22_li_5_span_4_Template, 2, 1, "span", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const edu_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r8.degree || edu_r8.diplome);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", edu_r8.school || edu_r8.etablissement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", edu_r8.year || edu_r8.annee);
  }
}
function RecruiterSharedProfilesComponent_div_21_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "h6", 67);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275text(3, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 71);
    \u0275\u0275template(5, RecruiterSharedProfilesComponent_div_21_div_22_li_5_Template, 5, 3, "li", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.parseJson(ctx_r1.selectedProfile.educationJson));
  }
}
function RecruiterSharedProfilesComponent_div_21_div_23_li_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exp_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", exp_r9.company || exp_r9.entreprise, " ");
  }
}
function RecruiterSharedProfilesComponent_div_21_div_23_li_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exp_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", exp_r9.period || exp_r9.periode, ") ");
  }
}
function RecruiterSharedProfilesComponent_div_21_div_23_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 73)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RecruiterSharedProfilesComponent_div_21_div_23_li_5_span_3_Template, 2, 1, "span", 62)(4, RecruiterSharedProfilesComponent_div_21_div_23_li_5_span_4_Template, 2, 1, "span", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exp_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r9.title || exp_r9.poste);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exp_r9.company || exp_r9.entreprise);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exp_r9.period || exp_r9.periode);
  }
}
function RecruiterSharedProfilesComponent_div_21_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "h6", 67);
    \u0275\u0275element(2, "i", 75);
    \u0275\u0275text(3, "Exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 71);
    \u0275\u0275template(5, RecruiterSharedProfilesComponent_div_21_div_23_li_5_Template, 5, 3, "li", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.parseJson(ctx_r1.selectedProfile.experienceJson));
  }
}
function RecruiterSharedProfilesComponent_div_21_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 29);
    \u0275\u0275text(2, "Aucune information compl\xE9mentaire disponible pour ce profil.");
    \u0275\u0275elementEnd()();
  }
}
function RecruiterSharedProfilesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function RecruiterSharedProfilesComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275listener("click", function RecruiterSharedProfilesComponent_div_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 50)(3, "div", 51)(4, "h5", 52);
    \u0275\u0275element(5, "i", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 54);
    \u0275\u0275listener("click", function RecruiterSharedProfilesComponent_div_21_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 55)(9, "div", 56)(10, "div", 57);
    \u0275\u0275element(11, "img", 58);
    \u0275\u0275elementStart(12, "h6");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 29);
    \u0275\u0275element(17, "i", 38);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, RecruiterSharedProfilesComponent_div_21_a_19_Template, 3, 1, "a", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 60);
    \u0275\u0275template(21, RecruiterSharedProfilesComponent_div_21_div_21_Template, 6, 1, "div", 61)(22, RecruiterSharedProfilesComponent_div_21_div_22_Template, 6, 1, "div", 61)(23, RecruiterSharedProfilesComponent_div_21_div_23_Template, 6, 1, "div", 61)(24, RecruiterSharedProfilesComponent_div_21_div_24_Template, 3, 0, "div", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 63)(26, "button", 64);
    \u0275\u0275listener("click", function RecruiterSharedProfilesComponent_div_21_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(27, "Fermer");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedProfile.fullName, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.getAvatarUrl(ctx_r1.selectedProfile), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedProfile.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedProfile.designation || "\xC9tudiant");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedProfile.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedProfile.linkedinUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedProfile.bio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parseJson(ctx_r1.selectedProfile.educationJson).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parseJson(ctx_r1.selectedProfile.experienceJson).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedProfile.bio && ctx_r1.parseJson(ctx_r1.selectedProfile.educationJson).length === 0 && ctx_r1.parseJson(ctx_r1.selectedProfile.experienceJson).length === 0);
  }
}
var RecruiterSharedProfilesComponent = class _RecruiterSharedProfilesComponent {
  recruiterService;
  profiles = [];
  filteredProfiles = [];
  searchQuery = "";
  loading = true;
  error = "";
  // Profil sélectionné pour le modal
  selectedProfile = null;
  constructor(recruiterService) {
    this.recruiterService = recruiterService;
  }
  ngOnInit() {
    this.loadProfiles();
  }
  loadProfiles() {
    this.loading = true;
    this.error = "";
    this.recruiterService.getSharedProfiles().subscribe({
      next: (data) => {
        this.profiles = data;
        this.filteredProfiles = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Impossible de charger les profils partag\xE9s.";
        this.loading = false;
        console.error(err);
      }
    });
  }
  onSearch() {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) {
      this.filteredProfiles = this.profiles;
      return;
    }
    this.filteredProfiles = this.profiles.filter((p) => (p.fullName || "").toLowerCase().includes(q) || (p.email || "").toLowerCase().includes(q) || (p.designation || "").toLowerCase().includes(q) || (p.bio || "").toLowerCase().includes(q));
  }
  viewProfile(profile) {
    this.selectedProfile = profile;
  }
  closeModal() {
    this.selectedProfile = null;
  }
  parseJson(json) {
    if (!json)
      return [];
    try {
      return JSON.parse(json);
    } catch {
      return [];
    }
  }
  getAvatarUrl(profile) {
    return profile.avatarPath ? "http://localhost:8081" + profile.avatarPath : "assets/img/user/avatar-default.png";
  }
  static \u0275fac = function RecruiterSharedProfilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterSharedProfilesComponent)(\u0275\u0275directiveInject(RecruiterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruiterSharedProfilesComponent, selectors: [["app-recruiter-shared-profiles"]], decls: 22, vars: 8, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-3"], [1, "icon-box", "bg-success-transparent", "flex-shrink-0"], [1, "ti", "ti-users", "fs-20", "text-success"], [1, "flex-grow-1"], [1, "mb-1"], [1, "text-muted", "mb-0", "small"], [1, "ms-auto", 2, "min-width", "280px"], [1, "input-group"], [1, "input-group-text", "bg-white"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Rechercher un profil...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], ["class", "modal-backdrop fade show", 3, "click", 4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", 3, "click", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-success"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "alert", "alert-danger"], [1, "ti", "ti-alert-circle", "me-2"], [1, "btn", "btn-sm", "btn-outline-danger", "ms-3", 3, "click"], [1, "ti", "ti-user-off", "fs-48", "text-muted", "d-block", "mb-3"], [1, "text-muted"], ["class", "text-muted small", 4, "ngIf"], [1, "text-muted", "small"], [1, "row", "g-3"], ["class", "col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xl-4"], [1, "card", "h-100", "border", "hover-shadow", 2, "cursor", "pointer", 3, "click"], [1, "card-body", "text-center"], ["alt", "Avatar", "width", "72", "height", "72", 1, "rounded-circle", "mb-3", 2, "object-fit", "cover", 3, "src"], [1, "text-muted", "small", "mb-1"], [1, "text-muted", "small", "mb-2"], [1, "ti", "ti-mail", "me-1"], ["class", "small text-truncate mb-2", "style", "max-width: 250px; margin: 0 auto;", 4, "ngIf"], [1, "d-flex", "justify-content-center", "gap-2", "mt-2"], ["target", "_blank", "class", "btn btn-sm btn-outline-primary", 3, "href", "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-success"], [1, "ti", "ti-eye", "me-1"], [1, "small", "text-truncate", "mb-2", 2, "max-width", "250px", "margin", "0 auto"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "href"], [1, "ti", "ti-brand-linkedin", "me-1"], [1, "modal-backdrop", "fade", "show", 3, "click"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 3, "click"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", 3, "click"], [1, "modal-content"], [1, "modal-header", "bg-success", "text-white"], [1, "modal-title", "text-white"], [1, "ti", "ti-user", "me-2"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [1, "row"], [1, "col-md-4", "text-center", "mb-3"], ["alt", "Avatar", "width", "120", "height", "120", 1, "rounded-circle", "mb-2", 2, "object-fit", "cover", 3, "src"], ["target", "_blank", "class", "btn btn-sm btn-primary mt-1", 3, "href", 4, "ngIf"], [1, "col-md-8"], ["class", "mb-3", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["target", "_blank", 1, "btn", "btn-sm", "btn-primary", "mt-1", 3, "href"], [1, "mb-3"], [1, "text-success"], [1, "ti", "ti-info-circle", "me-1"], [1, "small"], [1, "ti", "ti-school", "me-1"], [1, "list-unstyled", "small"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "mb-2"], ["class", "text-muted", 4, "ngIf"], [1, "ti", "ti-briefcase", "me-1"]], template: function RecruiterSharedProfilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "h5", 7);
      \u0275\u0275text(8, "Profils \xC9tudiants Partag\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "span", 11);
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function RecruiterSharedProfilesComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function RecruiterSharedProfilesComponent_Template_input_input_15_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(16, RecruiterSharedProfilesComponent_div_16_Template, 6, 0, "div", 14)(17, RecruiterSharedProfilesComponent_div_17_Template, 5, 1, "div", 15)(18, RecruiterSharedProfilesComponent_div_18_Template, 6, 2, "div", 14)(19, RecruiterSharedProfilesComponent_div_19_Template, 2, 1, "div", 16)(20, RecruiterSharedProfilesComponent_div_20_Template, 1, 0, "div", 17)(21, RecruiterSharedProfilesComponent_div_21_Template, 28, 10, "div", 18);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.filteredProfiles.length, " profil(s) disponible(s) ");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.filteredProfiles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.filteredProfiles.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedProfile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedProfile);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.hover-shadow[_ngcontent-%COMP%] {\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.hover-shadow[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=recruiter-shared-profiles.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterSharedProfilesComponent, [{
    type: Component,
    args: [{ selector: "app-recruiter-shared-profiles", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Barre de recherche -->\r
<div class="row mb-4">\r
    <div class="col-12">\r
        <div class="card border-0 shadow-sm">\r
            <div class="card-body d-flex align-items-center gap-3 py-3">\r
                <span class="icon-box bg-success-transparent flex-shrink-0">\r
                    <i class="ti ti-users fs-20 text-success"></i>\r
                </span>\r
                <div class="flex-grow-1">\r
                    <h5 class="mb-1">Profils \xC9tudiants Partag\xE9s</h5>\r
                    <p class="text-muted mb-0 small">\r
                        {{ filteredProfiles.length }} profil(s) disponible(s)\r
                    </p>\r
                </div>\r
                <div class="ms-auto" style="min-width: 280px;">\r
                    <div class="input-group">\r
                        <span class="input-group-text bg-white">\r
                            <i class="ti ti-search"></i>\r
                        </span>\r
                        <input type="text" class="form-control" placeholder="Rechercher un profil..."\r
                               [(ngModel)]="searchQuery" (input)="onSearch()">\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Chargement -->\r
<div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-success" role="status">\r
        <span class="visually-hidden">Chargement...</span>\r
    </div>\r
    <p class="mt-2 text-muted">Chargement des profils...</p>\r
</div>\r
\r
<!-- Erreur -->\r
<div *ngIf="error && !loading" class="alert alert-danger">\r
    <i class="ti ti-alert-circle me-2"></i>{{ error }}\r
    <button class="btn btn-sm btn-outline-danger ms-3" (click)="loadProfiles()">R\xE9essayer</button>\r
</div>\r
\r
<!-- Aucun profil -->\r
<div *ngIf="!loading && !error && filteredProfiles.length === 0" class="text-center py-5">\r
    <i class="ti ti-user-off fs-48 text-muted d-block mb-3"></i>\r
    <h6 class="text-muted">Aucun profil partag\xE9 trouv\xE9</h6>\r
    <p class="text-muted small" *ngIf="searchQuery">Essayez avec d'autres mots-cl\xE9s.</p>\r
    <p class="text-muted small" *ngIf="!searchQuery">Aucun \xE9tudiant n'a encore activ\xE9 le partage de profil.</p>\r
</div>\r
\r
<!-- Grille de profils -->\r
<div class="row g-3" *ngIf="!loading && !error && filteredProfiles.length > 0">\r
    <div class="col-md-6 col-xl-4" *ngFor="let profile of filteredProfiles">\r
        <div class="card h-100 border hover-shadow" style="cursor: pointer;" (click)="viewProfile(profile)">\r
            <div class="card-body text-center">\r
                <img [src]="getAvatarUrl(profile)" alt="Avatar"\r
                     class="rounded-circle mb-3" width="72" height="72"\r
                     style="object-fit: cover;">\r
                <h6 class="mb-1">{{ profile.fullName }}</h6>\r
                <p class="text-muted small mb-1">{{ profile.designation || '\xC9tudiant' }}</p>\r
                <p class="text-muted small mb-2">\r
                    <i class="ti ti-mail me-1"></i>{{ profile.email }}\r
                </p>\r
                <p *ngIf="profile.bio" class="small text-truncate mb-2" style="max-width: 250px; margin: 0 auto;">\r
                    {{ profile.bio }}\r
                </p>\r
                <div class="d-flex justify-content-center gap-2 mt-2">\r
                    <a *ngIf="profile.linkedinUrl" [href]="profile.linkedinUrl" target="_blank"\r
                       class="btn btn-sm btn-outline-primary" (click)="$event.stopPropagation()">\r
                        <i class="ti ti-brand-linkedin me-1"></i>LinkedIn\r
                    </a>\r
                    <button class="btn btn-sm btn-outline-success">\r
                        <i class="ti ti-eye me-1"></i>Voir\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal d\xE9tail profil -->\r
<div *ngIf="selectedProfile" class="modal-backdrop fade show" (click)="closeModal()"></div>\r
<div *ngIf="selectedProfile" class="modal fade show d-block" tabindex="-1" (click)="closeModal()">\r
    <div class="modal-dialog modal-lg modal-dialog-centered" (click)="$event.stopPropagation()">\r
        <div class="modal-content">\r
            <div class="modal-header bg-success text-white">\r
                <h5 class="modal-title text-white">\r
                    <i class="ti ti-user me-2"></i>{{ selectedProfile.fullName }}\r
                </h5>\r
                <button type="button" class="btn-close btn-close-white" (click)="closeModal()"></button>\r
            </div>\r
            <div class="modal-body">\r
                <div class="row">\r
                    <div class="col-md-4 text-center mb-3">\r
                        <img [src]="getAvatarUrl(selectedProfile)" alt="Avatar"\r
                             class="rounded-circle mb-2" width="120" height="120"\r
                             style="object-fit: cover;">\r
                        <h6>{{ selectedProfile.fullName }}</h6>\r
                        <p class="text-muted small">{{ selectedProfile.designation || '\xC9tudiant' }}</p>\r
                        <p class="text-muted small"><i class="ti ti-mail me-1"></i>{{ selectedProfile.email }}</p>\r
                        <a *ngIf="selectedProfile.linkedinUrl" [href]="selectedProfile.linkedinUrl"\r
                           target="_blank" class="btn btn-sm btn-primary mt-1">\r
                            <i class="ti ti-brand-linkedin me-1"></i>LinkedIn\r
                        </a>\r
                    </div>\r
                    <div class="col-md-8">\r
                        <!-- Bio -->\r
                        <div *ngIf="selectedProfile.bio" class="mb-3">\r
                            <h6 class="text-success"><i class="ti ti-info-circle me-1"></i>\xC0 propos</h6>\r
                            <p class="small">{{ selectedProfile.bio }}</p>\r
                        </div>\r
\r
                        <!-- Formation -->\r
                        <div *ngIf="parseJson(selectedProfile.educationJson).length > 0" class="mb-3">\r
                            <h6 class="text-success"><i class="ti ti-school me-1"></i>Formation</h6>\r
                            <ul class="list-unstyled small">\r
                                <li *ngFor="let edu of parseJson(selectedProfile.educationJson)" class="mb-2">\r
                                    <strong>{{ edu.degree || edu.diplome }}</strong>\r
                                    <span *ngIf="edu.school || edu.etablissement">\r
                                        \u2014 {{ edu.school || edu.etablissement }}\r
                                    </span>\r
                                    <span *ngIf="edu.year || edu.annee" class="text-muted">\r
                                        ({{ edu.year || edu.annee }})\r
                                    </span>\r
                                </li>\r
                            </ul>\r
                        </div>\r
\r
                        <!-- Exp\xE9rience -->\r
                        <div *ngIf="parseJson(selectedProfile.experienceJson).length > 0" class="mb-3">\r
                            <h6 class="text-success"><i class="ti ti-briefcase me-1"></i>Exp\xE9rience</h6>\r
                            <ul class="list-unstyled small">\r
                                <li *ngFor="let exp of parseJson(selectedProfile.experienceJson)" class="mb-2">\r
                                    <strong>{{ exp.title || exp.poste }}</strong>\r
                                    <span *ngIf="exp.company || exp.entreprise">\r
                                        \u2014 {{ exp.company || exp.entreprise }}\r
                                    </span>\r
                                    <span *ngIf="exp.period || exp.periode" class="text-muted">\r
                                        ({{ exp.period || exp.periode }})\r
                                    </span>\r
                                </li>\r
                            </ul>\r
                        </div>\r
\r
                        <!-- Aucune info -->\r
                        <div *ngIf="!selectedProfile.bio && parseJson(selectedProfile.educationJson).length === 0 && parseJson(selectedProfile.experienceJson).length === 0">\r
                            <p class="text-muted small">Aucune information compl\xE9mentaire disponible pour ce profil.</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="modal-footer">\r
                <button class="btn btn-secondary" (click)="closeModal()">Fermer</button>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/features/recruiter/recruiter-shared-profiles/recruiter-shared-profiles.component.scss */\n.hover-shadow {\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.hover-shadow:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=recruiter-shared-profiles.component.css.map */\n"] }]
  }], () => [{ type: RecruiterService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruiterSharedProfilesComponent, { className: "RecruiterSharedProfilesComponent", filePath: "src/app/features/recruiter/recruiter-shared-profiles/recruiter-shared-profiles.component.ts", lineNumber: 13 });
})();
export {
  RecruiterSharedProfilesComponent
};
//# sourceMappingURL=chunk-BK2HZ5TL.js.map
