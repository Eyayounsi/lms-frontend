"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[6901],{

/***/ 6901:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/user-profile/user-profile.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileComponent: () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/routes/routes */ 92643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _service_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/profile/profile.service */ 98428);
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/auth.service */ 34530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 85422);









const _c0 = (a0, a1, a2, a3) => ({
  "poor-active": a0,
  "avg-active": a1,
  "strong-active": a2,
  "heavy-active": a3
});
const _c1 = a0 => ({
  "active": a0
});
function UserProfileComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UserProfileComponent_div_4_div_4_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r0.heroBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.userInitial);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isSuperAdmin);
  }
}
function UserProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_h5_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.profileForm.fullName || "Mon Profil", " ");
  }
}
function UserProfileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Acc\u00E8s Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.profileForm.email);
  }
}
function UserProfileComponent_div_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
function UserProfileComponent_div_28_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function UserProfileComponent_div_28_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 77);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.avatarDisplayUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function UserProfileComponent_div_28_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r0.heroBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.userInitial, " ");
  }
}
function UserProfileComponent_div_28_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_28_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Upload... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_28_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.avatarSuccessMessage);
  }
}
function UserProfileComponent_div_28_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.avatarErrorMessage);
  }
}
function UserProfileComponent_div_28_div_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Le nom est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_28_div_41_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Minimum 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_28_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserProfileComponent_div_28_div_41_span_1_Template, 2, 0, "span", 21)(2, UserProfileComponent_div_28_div_41_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const nameField_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", nameField_r3.errors == null ? null : nameField_r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", nameField_r3.errors == null ? null : nameField_r3.errors["minlength"]);
  }
}
function UserProfileComponent_div_28_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enregistrer les modifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_28_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enregistrement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "h5", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Informations Personnelles");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Modifiez vos donnees de profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](8, UserProfileComponent_div_28_Conditional_8_Template, 4, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](9, UserProfileComponent_div_28_Conditional_9_Template, 4, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UserProfileComponent_div_28_img_11_Template, 1, 1, "img", 45)(12, UserProfileComponent_div_28_div_12_Template, 2, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 47)(14, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Profile Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "PNG or JPG no bigger than 800px width and height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 50)(19, "label", 51)(20, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UserProfileComponent_div_28_Template_input_change_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onAvatarSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UserProfileComponent_div_28_span_21_Template, 2, 0, "span", 21)(22, UserProfileComponent_div_28_span_22_Template, 3, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_div_28_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.removeAvatar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UserProfileComponent_div_28_div_25_Template, 2, 1, "div", 55)(26, UserProfileComponent_div_28_div_26_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "hr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "form", 58, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_28_Template_form_ngSubmit_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onUpdateProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 59)(31, "div", 60)(32, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Nom complet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 63)(37, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "input", 66, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UserProfileComponent_div_28_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.profileForm.fullName, $event) || (ctx_r0.profileForm.fullName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, UserProfileComponent_div_28_div_41_Template, 3, 2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 60)(43, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Adresse email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 63)(48, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UserProfileComponent_div_28_Template_input_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.profileForm.email, $event) || (ctx_r0.profileForm.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 60)(52, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Telephone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "(optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 63)(57, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UserProfileComponent_div_28_Template_input_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.profileForm.phone, $event) || (ctx_r0.profileForm.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 73)(61, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, UserProfileComponent_div_28_span_62_Template, 3, 0, "span", 21)(63, UserProfileComponent_div_28_span_63_Template, 3, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const profileFormRef_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
    const nameField_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](40);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("--prof-accent", ctx_r0.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.successMessage ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.errorMessage && ctx_r0.activeTab === "profil" ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.avatarDisplayUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.avatarDisplayUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r0.avatarUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.avatarUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.avatarUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.avatarUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.avatarUploading || !ctx_r0.avatarPath);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.avatarSuccessMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.avatarErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profileForm.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", nameField_r3.invalid && (nameField_r3.dirty || nameField_r3.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profileForm.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profileForm.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r0.heroBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.saving || ctx_r0.loading || profileFormRef_r4.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.saving);
  }
}
function UserProfileComponent_div_29_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.pwSuccess);
  }
}
function UserProfileComponent_div_29_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.pwError);
  }
}
function UserProfileComponent_div_29_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 105)(2, "span", 105)(3, "span", 105)(4, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](5, _c0, ctx_r0.pwStrength === 1, ctx_r0.pwStrength === 2, ctx_r0.pwStrength === 3, ctx_r0.pwStrength === 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, ctx_r0.pwStrength >= 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, ctx_r0.pwStrength >= 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx_r0.pwStrength >= 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, ctx_r0.pwStrength >= 4));
  }
}
function UserProfileComponent_div_29_div_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Faible. Au moins 8 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_29_div_31_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Moyen. Ajoutez une majuscule ou chiffre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_29_div_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Bien. Ajoutez un symbole special ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_29_div_31_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Fort ! Mot de passe securise. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_29_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserProfileComponent_div_29_div_31_span_1_Template, 3, 0, "span", 107)(2, UserProfileComponent_div_29_div_31_span_2_Template, 3, 0, "span", 108)(3, UserProfileComponent_div_29_div_31_span_3_Template, 3, 0, "span", 109)(4, UserProfileComponent_div_29_div_31_span_4_Template, 3, 0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 111)(6, "small", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " 8 caracteres min. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "small", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Majuscule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "small", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Chiffre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "small", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Symbole special ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pwStrength === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pwStrength === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pwStrength === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pwStrength === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("prof-pw-rule-ok", ctx_r0.pwForm.newPassword.length >= 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ti-circle-check", ctx_r0.pwForm.newPassword.length >= 8)("ti-circle", ctx_r0.pwForm.newPassword.length < 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("prof-pw-rule-ok", ctx_r0.pwHasUpper);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ti-circle-check", ctx_r0.pwHasUpper)("ti-circle", !ctx_r0.pwHasUpper);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("prof-pw-rule-ok", ctx_r0.pwHasDigit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ti-circle-check", ctx_r0.pwHasDigit)("ti-circle", !ctx_r0.pwHasDigit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("prof-pw-rule-ok", ctx_r0.pwHasSymbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ti-circle-check", ctx_r0.pwHasSymbol)("ti-circle", !ctx_r0.pwHasSymbol);
  }
}
function UserProfileComponent_div_29_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Les mots de passe ne correspondent pas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_29_small_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Les mots de passe correspondent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_29_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Changer le mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_29_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enregistrement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "div", 38)(3, "div", 85)(4, "div", 86)(5, "div", 87)(6, "div", 88)(7, "h5", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Changer le Mot de Passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Utilisez un mot de passe fort pour securiser votre acces");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](11, UserProfileComponent_div_29_Conditional_11_Template, 4, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](12, UserProfileComponent_div_29_Conditional_12_Template, 4, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 89)(14, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Mot de passe actuel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 90)(19, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UserProfileComponent_div_29_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.pwForm.oldPassword, $event) || (ctx_r0.pwForm.oldPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_div_29_Template_span_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showOldPw = !ctx_r0.showOldPw);
    })("keydown.enter", function UserProfileComponent_div_29_Template_span_keydown_enter_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showOldPw = !ctx_r0.showOldPw);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 89)(22, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Nouveau mot de passe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 93)(27, "div", 94)(28, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UserProfileComponent_div_29_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.pwForm.newPassword, $event) || (ctx_r0.pwForm.newPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_div_29_Template_span_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showNewPw = !ctx_r0.showNewPw);
    })("keydown.enter", function UserProfileComponent_div_29_Template_span_keydown_enter_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showNewPw = !ctx_r0.showNewPw);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, UserProfileComponent_div_29_div_30_Template, 5, 18, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, UserProfileComponent_div_29_div_31_Template, 18, 28, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 99)(33, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Confirmer le mot de passe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 90)(38, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UserProfileComponent_div_29_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.pwForm.confirmPassword, $event) || (ctx_r0.pwForm.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_div_29_Template_span_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showConfirmPw = !ctx_r0.showConfirmPw);
    })("keydown.enter", function UserProfileComponent_div_29_Template_span_keydown_enter_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showConfirmPw = !ctx_r0.showConfirmPw);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, UserProfileComponent_div_29_small_40_Template, 3, 0, "small", 101)(41, UserProfileComponent_div_29_small_41_Template, 3, 0, "small", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_div_29_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onChangePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, UserProfileComponent_div_29_span_43_Template, 3, 0, "span", 21)(44, UserProfileComponent_div_29_span_44_Template, 3, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("--prof-accent", ctx_r0.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.pwSuccess ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.pwError ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0.showOldPw ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.pwForm.oldPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.showOldPw ? "isax-eye" : "isax-eye-slash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0.showNewPw ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.pwForm.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.showNewPw ? "isax-eye" : "isax-eye-slash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pwForm.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pwForm.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-valid", ctx_r0.pwMatch)("is-invalid", ctx_r0.pwForm.confirmPassword && !ctx_r0.pwMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0.showConfirmPw ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.pwForm.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.showConfirmPw ? "isax-eye" : "isax-eye-slash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pwForm.confirmPassword && !ctx_r0.pwMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.pwMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r0.heroBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.changingPw);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.changingPw);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.changingPw);
  }
}
function UserProfileComponent_div_30_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r0.accentFaint)("border", "1px solid " + ctx_r0.accentBorder);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r0.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r0.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.deleteError);
  }
}
function UserProfileComponent_div_30_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Supprimer definitivement mon compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_30_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Suppression en cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "div", 38)(3, "div", 126)(4, "div", 86)(5, "div", 87)(6, "div", 88)(7, "h5", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Zone Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions irreversibles \u2014 procedez avec prudence");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Supprimer definitivement mon compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Cette action est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "irreversible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, ". Toutes vos donnees, cours, certificats et historiques seront ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "definitiv ement supprimes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " sans possibilite de recuperation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](24, UserProfileComponent_div_30_Conditional_24_Template, 4, 9, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 99)(26, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Confirmez avec votre mot de passe actuel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 132)(31, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UserProfileComponent_div_30_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.deletePassword, $event) || (ctx_r0.deletePassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_div_30_Template_span_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showDeletePw = !ctx_r0.showDeletePw);
    })("keydown.enter", function UserProfileComponent_div_30_Template_span_keydown_enter_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showDeletePw = !ctx_r0.showDeletePw);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_div_30_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.confirmDeleteAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, UserProfileComponent_div_30_span_34_Template, 3, 0, "span", 21)(35, UserProfileComponent_div_30_span_35_Template, 3, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("--prof-accent", ctx_r0.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r0.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r0.accentFaint)("border", "1px solid " + ctx_r0.accentBorder);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r0.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.deleteError ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0.showDeletePw ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.deletePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.showDeletePw ? "isax-eye" : "isax-eye-slash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r0.accentFaint)("color", ctx_r0.accentColor)("border", "1.5px solid " + ctx_r0.accentBorder);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.deleting);
  }
}
let UserProfileComponent = /*#__PURE__*/(() => {
  class UserProfileComponent {
    profileService;
    authService;
    router;
    routes = _service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    activeTab = 'profil';
    profileForm = {
      fullName: '',
      email: '',
      phone: ''
    };
    successMessage = '';
    errorMessage = '';
    saving = false;
    loading = true;
    // Changer le mot de passe
    pwForm = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
    pwSuccess = '';
    pwError = '';
    changingPw = false;
    showOldPw = false;
    showNewPw = false;
    showConfirmPw = false;
    // Supprimer le compte
    deletePassword = '';
    deleteError = '';
    deleting = false;
    showDeletePw = false;
    avatarPath = '';
    avatarPreview = null;
    avatarUploading = false;
    avatarSuccessMessage = '';
    avatarErrorMessage = '';
    userRole = '';
    constructor(profileService, authService, router) {
      this.profileService = profileService;
      this.authService = authService;
      this.router = router;
    }
    ngOnInit() {
      this.userRole = localStorage.getItem('role') || '';
      this.loading = true;
      this.profileService.getProfile().subscribe({
        next: data => {
          this.profileForm.fullName = data.fullName || '';
          this.profileForm.email = data.email || '';
          this.profileForm.phone = data.phone || '';
          this.avatarPath = data.avatarPath || '';
          this.loading = false;
        },
        error: () => {
          this.errorMessage = 'Impossible de charger le profil. Vérifiez la connexion au serveur.';
          this.loading = false;
        }
      });
    }
    get userInitial() {
      return this.profileForm.fullName?.charAt(0)?.toUpperCase() || '?';
    }
    get avatarDisplayUrl() {
      if (this.avatarPreview) return this.avatarPreview;
      if (!this.avatarPath) return '';
      return this.authService.resolveAvatarUrl(this.avatarPath) || '';
    }
    get isSuperAdmin() {
      return this.userRole === 'SUPERADMIN';
    }
    get isAdmin() {
      return this.userRole === 'ADMIN';
    }
    get roleLabel() {
      const map = {
        SUPERADMIN: 'Super Administrateur',
        ADMIN: 'Administrateur',
        INSTRUCTOR: 'Instructeur',
        STUDENT: 'Étudiant',
        RECRUITER: 'Recruteur'
      };
      return map[this.userRole] || this.userRole;
    }
    get roleIcon() {
      const map = {
        SUPERADMIN: 'ti-shield-bolt',
        ADMIN: 'ti-shield-check',
        INSTRUCTOR: 'ti-chalkboard',
        STUDENT: 'ti-school',
        RECRUITER: 'ti-briefcase'
      };
      return map[this.userRole] || 'ti-user';
    }
    get heroBg() {
      if (this.isSuperAdmin) return 'linear-gradient(135deg, #020c18 0%, #0a1a2e 25%, #0d3a66 50%, #5625E8 75%, #0DCAF0 100%)';
      if (this.isAdmin) return 'linear-gradient(135deg, #392C7D 0%, #2D1B6B 55%, #1a0f4a 100%)';
      if (this.userRole === 'RECRUITER') return 'linear-gradient(135deg, #03C95A 0%, #392C7D 55%, #0DCAF0 100%)';
      return 'linear-gradient(135deg, #392C7D 0%, #2D1B6B 55%, #1a0f4a 100%)';
    }
    get accentColor() {
      if (this.isSuperAdmin) return '#0DCAF0';
      if (this.isAdmin) return '#FF4667';
      if (this.userRole === 'INSTRUCTOR') return '#6366f1';
      if (this.userRole === 'STUDENT') return '#03C95A';
      if (this.userRole === 'RECRUITER') return '#03C95A';
      return '#392C7D';
    }
    get accentFaint() {
      if (this.isSuperAdmin) return 'rgba(13,202,240,.06)';
      if (this.isAdmin) return 'rgba(255,70,103,.06)';
      if (this.userRole === 'INSTRUCTOR') return 'rgba(99,102,241,.06)';
      if (this.userRole === 'STUDENT') return 'rgba(3,201,90,.06)';
      if (this.userRole === 'RECRUITER') return 'rgba(3,201,90,.06)';
      return 'rgba(57,44,125,.06)';
    }
    get accentBorder() {
      if (this.isSuperAdmin) return 'rgba(13,202,240,.22)';
      if (this.isAdmin) return 'rgba(255,70,103,.22)';
      if (this.userRole === 'INSTRUCTOR') return 'rgba(99,102,241,.22)';
      if (this.userRole === 'STUDENT') return 'rgba(3,201,90,.22)';
      if (this.userRole === 'RECRUITER') return 'rgba(3,201,90,.22)';
      return 'rgba(57,44,125,.22)';
    }
    get pwHasUpper() {
      return /[A-Z]/.test(this.pwForm.newPassword);
    }
    get pwHasDigit() {
      return /[0-9]/.test(this.pwForm.newPassword);
    }
    get pwHasSymbol() {
      return /[^A-Za-z0-9]/.test(this.pwForm.newPassword);
    }
    get pwStrength() {
      const p = this.pwForm.newPassword;
      if (!p) return 0;
      let s = 0;
      if (p.length >= 8) s++;
      if (this.pwHasUpper) s++;
      if (this.pwHasDigit) s++;
      if (this.pwHasSymbol) s++;
      return s;
    }
    get pwStrengthLabel() {
      return ['', 'Faible', 'Moyen', 'Bien', 'Fort'][this.pwStrength] || '';
    }
    get pwStrengthColor() {
      return ['', '#E70D0D', '#FFC107', '#03C95A', '#392C7D'][this.pwStrength] || '';
    }
    get pwMatch() {
      return !!this.pwForm.confirmPassword && this.pwForm.newPassword === this.pwForm.confirmPassword;
    }
    onUpdateProfile() {
      this.successMessage = '';
      this.errorMessage = '';
      if (!this.profileForm.fullName?.trim()) {
        this.errorMessage = 'Le nom complet est requis.';
        return;
      }
      if (!this.profileForm.email?.trim()) {
        this.errorMessage = "L'adresse email est requise.";
        return;
      }
      this.saving = true;
      const payload = {
        fullName: this.profileForm.fullName.trim(),
        email: this.profileForm.email.trim() || null,
        phone: this.profileForm.phone?.trim() || null
      };
      this.profileService.updateProfile(payload).subscribe({
        next: data => {
          this.saving = false;
          this.successMessage = 'Profil mis à jour avec succès !';
          // Propager le nouveau nom vers tous les composants abonnés (sidebar, header)
          this.authService.setFullName(data.fullName || '');
          if (data.email) localStorage.setItem('email', data.email);
          setTimeout(() => this.successMessage = '', 4000);
        },
        error: err => {
          this.saving = false;
          // Afficher le premier message de validation spécifique si disponible
          const errors = err.error?.errors;
          if (errors?.length) {
            this.errorMessage = errors[0];
          } else {
            this.errorMessage = err.error?.message || err.error || 'Erreur lors de la mise à jour.';
          }
        }
      });
    }
    onChangePassword() {
      this.pwSuccess = '';
      this.pwError = '';
      if (!this.pwForm.oldPassword) {
        this.pwError = 'Veuillez saisir votre mot de passe actuel.';
        return;
      }
      if (this.pwForm.newPassword.length < 6) {
        this.pwError = 'Le nouveau mot de passe doit contenir au moins 6 caractères.';
        return;
      }
      if (this.pwForm.newPassword !== this.pwForm.confirmPassword) {
        this.pwError = 'Les mots de passe ne correspondent pas.';
        return;
      }
      this.changingPw = true;
      this.profileService.changePassword({
        oldPassword: this.pwForm.oldPassword,
        newPassword: this.pwForm.newPassword
      }).subscribe({
        next: () => {
          this.changingPw = false;
          this.pwSuccess = 'Mot de passe changé avec succès !';
          this.pwForm = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
          };
          setTimeout(() => this.pwSuccess = '', 5000);
        },
        error: err => {
          this.changingPw = false;
          this.pwError = err.error || err.error?.message || 'Mot de passe actuel incorrect.';
        }
      });
    }
    confirmDeleteAccount() {
      if (!this.deletePassword.trim()) {
        this.deleteError = 'Veuillez entrer votre mot de passe.';
        return;
      }
      this.deleting = true;
      this.deleteError = '';
      this.profileService.deleteAccount(this.deletePassword).subscribe({
        next: () => {
          this.authService.logout();
          this.router.navigate([this.routes.login]);
        },
        error: err => {
          this.deleting = false;
          this.deleteError = err.error || 'Mot de passe incorrect.';
        }
      });
    }
    onAvatarSelected(event) {
      this.avatarSuccessMessage = '';
      this.avatarErrorMessage = '';
      const input = event.target;
      if (!input.files?.length) return;
      const file = input.files[0];
      if (!file.type.startsWith('image/')) {
        this.avatarErrorMessage = 'Veuillez choisir un fichier image valide (PNG/JPG).';
        input.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = e => {
        this.avatarPreview = e.target?.result;
      };
      reader.readAsDataURL(file);
      this.avatarUploading = true;
      this.profileService.uploadAvatar(file).subscribe({
        next: res => {
          this.avatarUploading = false;
          this.avatarPreview = null;
          this.avatarPath = res?.avatarPath || '';
          this.authService.setAvatarPath(this.avatarPath);
          this.avatarSuccessMessage = 'Photo de profil mise a jour avec succes.';
          input.value = '';
        },
        error: err => {
          this.avatarUploading = false;
          this.avatarPreview = null;
          this.avatarErrorMessage = err?.error?.message || err?.error?.error || 'Impossible de mettre a jour la photo.';
          input.value = '';
        }
      });
    }
    removeAvatar() {
      this.avatarSuccessMessage = '';
      this.avatarErrorMessage = '';
      if (!this.avatarPath) {
        this.avatarErrorMessage = 'Aucune photo de profil a supprimer.';
        return;
      }
      const confirmed = window.confirm('Voulez-vous supprimer votre photo de profil ?');
      if (!confirmed) return;
      this.avatarUploading = true;
      this.profileService.deleteAvatar().subscribe({
        next: () => {
          this.avatarUploading = false;
          this.avatarPreview = null;
          this.avatarPath = '';
          this.authService.setAvatarPath('');
          this.avatarSuccessMessage = 'Photo de profil supprimee avec succes.';
        },
        error: err => {
          this.avatarUploading = false;
          this.avatarErrorMessage = err?.error?.message || err?.error?.error || 'Impossible de supprimer la photo.';
        }
      });
    }
    static ɵfac = function UserProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 31,
      vars: 23,
      consts: [["profileFormRef", "ngForm"], ["nameField", "ngModel"], [1, "content"], [1, "container"], [1, "prof-id-card", "mb-4"], [1, "d-flex", "align-items-center", "gap-3"], ["class", "prof-av-wrap", 4, "ngIf"], [1, "flex-grow-1", "overflow-hidden"], ["class", "mb-1 fw-bold text-truncate", 4, "ngIf"], ["class", "placeholder-glow mb-1", 4, "ngIf"], [1, "d-flex", "gap-2", "align-items-center", "flex-wrap"], [1, "badge", "rounded-pill", "d-inline-flex", "align-items-center", "gap-1", "prof-role-badge"], [1, "ti", 3, "ngClass"], ["class", "badge rounded-pill d-inline-flex align-items-center gap-1", "style", "background:linear-gradient(135deg,#020c18,#5625E8,#0DCAF0);color:#fff;box-shadow:0 2px 8px rgba(13,202,240,.35)", 4, "ngIf"], ["class", "d-none d-md-block text-end flex-shrink-0", 4, "ngIf"], [1, "settings-nav", "prof-settings-nav", "d-flex", "align-items-center", "flex-wrap", "border", "bg-light-900", "rounded"], ["href", "javascript:void(0)", 3, "click"], [1, "ti", "ti-user-edit", "me-1"], [1, "ti", "ti-lock", "me-1"], ["href", "javascript:void(0)", 1, "prof-tab-danger-link", 3, "click"], [1, "ti", "ti-alert-triangle", "me-1"], [4, "ngIf"], [1, "prof-av-wrap"], [1, "prof-av-circle"], [1, "prof-av-initial"], ["class", "prof-av-crown", 4, "ngIf"], [1, "prof-av-crown"], [1, "ti", "ti-shield-bolt"], [1, "prof-av-circle", 2, "background", "rgba(57,44,125,.12)"], [1, "mb-1", "fw-bold", "text-truncate"], [1, "placeholder-glow", "mb-1"], [1, "placeholder", "rounded", "col-5", 2, "height", "18px"], [1, "badge", "rounded-pill", "d-inline-flex", "align-items-center", "gap-1", 2, "background", "linear-gradient(135deg,#020c18,#5625E8,#0DCAF0)", "color", "#fff", "box-shadow", "0 2px 8px rgba(13,202,240,.35)"], [1, "ti", "ti-shield-star"], [1, "d-none", "d-md-block", "text-end", "flex-shrink-0"], [1, "text-muted"], [1, "ti", "ti-mail", "me-1"], [1, "card", "border-0", "shadow-sm", "prof-content-card"], [1, "card-body", "p-4"], [1, "edit-profile-info", "mb-4"], [1, "mb-1", "fs-18"], [1, "text-muted", "mb-0"], [1, "alert", "alert-success", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "prof-photo-row", "mb-4"], ["class", "prof-photo-avatar", "alt", "Profile Photo", 3, "src", 4, "ngIf"], ["class", "prof-photo-avatar prof-photo-avatar--initial", 3, "background", 4, "ngIf"], [1, "prof-photo-content"], [1, "mb-1"], [1, "text-muted", "mb-2"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "prof-photo-btn", "prof-photo-btn--upload"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change", "disabled"], ["class", "d-flex align-items-center gap-2", 4, "ngIf"], ["type", "button", 1, "prof-photo-btn", "prof-photo-btn--delete", 3, "click", "disabled"], ["class", "alert alert-success mb-3", 4, "ngIf"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "my-4"], [3, "ngSubmit"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], [1, "input-icon", "position-relative"], [1, "input-icon-addon"], [1, "ti", "ti-user"], ["type", "text", "name", "fullName", "required", "", "minlength", "2", "maxlength", "150", "placeholder", "Jean Dupont", 1, "form-control", "ps-4", 3, "ngModelChange", "ngModel"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "ti", "ti-mail"], ["type", "email", "name", "email", "required", "", "placeholder", "jean@example.com", 1, "form-control", "ps-4", 3, "ngModelChange", "ngModel"], [1, "text-muted", "fw-normal"], [1, "ti", "ti-phone"], ["type", "text", "name", "phone", "placeholder", "+33 6 12 34 56 78", 1, "form-control", "ps-4", 3, "ngModelChange", "ngModel"], [1, "mt-4", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "rounded-pill", "px-4", "fw-semibold", "text-white", "prof-save-btn", 3, "disabled"], [1, "ti", "ti-circle-check", "fs-16", "flex-shrink-0"], [1, "ti", "ti-alert-circle", "fs-16", "flex-shrink-0"], ["alt", "Profile Photo", 1, "prof-photo-avatar", 3, "src"], [1, "prof-photo-avatar", "prof-photo-avatar--initial"], [1, "d-flex", "align-items-center", "gap-2"], [1, "spinner-border", "spinner-border-sm"], [1, "alert", "alert-success", "mb-3"], [1, "alert", "alert-danger", "mb-3"], [1, "text-danger", "small", "mt-1"], [1, "ti", "ti-device-floppy", "me-2"], [1, "border-bottom", "mb-4", "pb-2"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "mb-3", "position-relative"], [1, "position-relative"], ["placeholder", "Votre mot de passe actuel", 1, "pass-inputs", "form-control", 3, "ngModelChange", "type", "ngModel"], ["tabindex", "0", 1, "isax", "toggle-password", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordInput", 1, "pass-group"], [1, "pass-group", "mb-3"], ["id", "password", "placeholder", "Min. 8 caracteres", 1, "pass-input", "form-control", "form-control-lg", 3, "ngModelChange", "type", "ngModel"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordStrength", "class", "strength-meter password-strength", 3, "ngClass", 4, "ngIf"], ["id", "passwordInfo", "class", "mt-2", "aria-live", "polite", 4, "ngIf"], [1, "mb-4"], ["placeholder", "Repetez le nouveau mot de passe", 1, "pass-inputs", "form-control", 3, "ngModelChange", "type", "ngModel"], ["class", "text-danger mt-1 d-block", 4, "ngIf"], ["class", "text-success mt-1 d-block", 4, "ngIf"], ["type", "button", 1, "btn", "rounded-pill", "px-4", "fw-semibold", "text-white", "prof-save-btn", 3, "click", "disabled"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", 3, "ngClass"], [3, "ngClass"], ["id", "passwordInfo", "aria-live", "polite", 1, "mt-2"], ["class", "d-flex align-items-center text-danger fs-15 fw-semibold mb-2", 4, "ngIf"], ["class", "d-flex align-items-center text-warning fs-15 fw-semibold mb-2", 4, "ngIf"], ["class", "d-flex align-items-center fs-15 fw-semibold mb-2", "style", "color:#6366f1", 4, "ngIf"], ["class", "d-flex align-items-center text-success fs-15 fw-semibold mb-2", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gap-3", "mt-1"], [1, "prof-pw-rule"], [1, "ti"], [1, "d-flex", "align-items-center", "text-danger", "fs-15", "fw-semibold", "mb-2"], ["src", "assets/img/icon/angry.svg", "alt", "", 1, "me-2"], [1, "d-flex", "align-items-center", "text-warning", "fs-15", "fw-semibold", "mb-2"], ["src", "assets/img/icon/anguish.svg", "alt", "", 1, "me-2"], [1, "d-flex", "align-items-center", "fs-15", "fw-semibold", "mb-2", 2, "color", "#6366f1"], ["src", "assets/img/icon/smile.svg", "alt", "", 1, "me-2"], [1, "d-flex", "align-items-center", "text-success", "fs-15", "fw-semibold", "mb-2"], [1, "text-danger", "mt-1", "d-block"], [1, "ti", "ti-alert-circle", "me-1"], [1, "text-success", "mt-1", "d-block"], [1, "ti", "ti-circle-check", "me-1"], [1, "ti", "ti-key", "me-2"], [1, "border-bottom", "mb-4", "pb-4"], [1, "d-flex", "align-items-start", "gap-3", "mb-4", "rounded-3", "p-3"], [1, "ti", "ti-alert-triangle", "fs-18", "flex-shrink-0", "mt-1"], [1, "mb-0", "small", "mt-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-3", "rounded-3", "p-3", 3, "background", "border"], [1, "form-label", "fw-medium"], [1, "position-relative", 2, "max-width", "360px"], ["type", "button", 1, "btn", "rounded-pill", "fw-semibold", 3, "click", "disabled"], [1, "d-flex", "align-items-center", "gap-2", "mb-3", "rounded-3", "p-3"], [1, "ti", "ti-trash", "me-2"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UserProfileComponent_div_4_Template, 5, 4, "div", 6)(5, UserProfileComponent_div_5_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, UserProfileComponent_h5_7_Template, 2, 1, "h5", 8)(8, UserProfileComponent_div_8_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 10)(10, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UserProfileComponent_span_13_Template, 3, 0, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UserProfileComponent_div_14_Template, 4, 1, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ul", 15)(16, "li")(17, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_a_click_17_listener() {
            return ctx.activeTab = "profil";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Modifier le profil ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li")(21, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_a_click_21_listener() {
            return ctx.activeTab = "securite";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Securite ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li")(25, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_a_click_25_listener() {
            return ctx.activeTab = "danger";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Zone Danger ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, UserProfileComponent_div_28_Template, 64, 23, "div", 21)(29, UserProfileComponent_div_29_Template, 45, 26, "div", 21)(30, UserProfileComponent_div_30_Template, 36, 23, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-left-color", ctx.accentColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx.accentColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.roleIcon);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.roleLabel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSuperAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("--prof-accent", ctx.accentColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "securite");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "securite");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "danger");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.prof-id-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 18px 20px;\n  border-left: 4px solid #392C7D;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n\n\n.prof-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 58px;\n  height: 58px;\n}\n\n.prof-av-circle[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);\n}\n\n.prof-av-initial[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1;\n}\n\n.prof-av-crown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -4px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #FF9500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 6px rgba(255, 149, 0, 0.5);\n}\n.prof-av-crown[_ngcontent-%COMP%]   .ti[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #fff;\n}\n\n\n\n.prof-role-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  padding: 4px 10px;\n  color: #fff;\n}\n\n\n\n.prof-settings-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--prof-accent, #392C7D) !important;\n}\n.prof-settings-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n  background: var(--prof-accent, #392C7D) !important;\n  opacity: 1 !important;\n}\n\n.prof-tab-danger-link[_ngcontent-%COMP%] {\n  color: var(--prof-accent, #392C7D) !important;\n}\n.prof-tab-danger-link.active[_ngcontent-%COMP%]:after {\n  background: var(--prof-accent, #392C7D) !important;\n}\n\n\n\n.prof-content-card[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--prof-accent, #392C7D) !important;\n  border-radius: 8px !important;\n}\n\n.prof-danger-card[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--prof-accent, #392C7D) !important;\n  border-radius: 8px !important;\n}\n\n\n\n.prof-save-btn[_ngcontent-%COMP%] {\n  border: none;\n  color: #fff !important;\n}\n.prof-save-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n}\n.prof-save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n}\n\n\n\n.prof-pw-rule[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.prof-pw-rule[_ngcontent-%COMP%]   .ti[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.prof-pw-rule-ok[_ngcontent-%COMP%] {\n  color: #03C95A;\n}\n\n.prof-photo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 2px 0;\n}\n\n.prof-photo-avatar[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #e5e7eb;\n  border: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n\n.prof-photo-avatar--initial[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 30px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.prof-photo-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.prof-photo-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.prof-photo-btn--upload[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #111827;\n}\n.prof-photo-btn--upload[_ngcontent-%COMP%]:hover {\n  background: #d1d5db;\n}\n\n.prof-photo-btn--delete[_ngcontent-%COMP%] {\n  background: #ff4667;\n  color: #fff;\n}\n.prof-photo-btn--delete[_ngcontent-%COMP%]:hover:enabled {\n  background: #e83b5b;\n}\n.prof-photo-btn--delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.prof-photo-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n\n\n\n@media (max-width: 767px) {\n  .prof-id-card[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .prof-av-circle[_ngcontent-%COMP%], \n   .prof-av-wrap[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 46px;\n  }\n  .prof-av-initial[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .prof-photo-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .prof-photo-avatar[_ngcontent-%COMP%] {\n    width: 76px;\n    height: 76px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7OztnRkFBQTtBQUtBLDhFQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUEsK0VBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FBQ0Y7QUFBRTtFQUFNLGVBQUE7RUFBaUIsV0FBQTtBQUl6Qjs7QUFEQSwrRUFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFJRjs7QUFEQSw4RUFBQTtBQUNBO0VBQ0UsNkNBQUE7QUFJRjtBQUhFO0VBQ0Usa0RBQUE7RUFDQSxxQkFBQTtBQUtKOztBQURBO0VBQ0UsNkNBQUE7QUFJRjtBQUhFO0VBQ0Usa0RBQUE7QUFLSjs7QUFEQSwrRUFBQTtBQUNBO0VBQ0UsNERBQUE7RUFDQSw2QkFBQTtBQUlGOztBQURBO0VBQ0UsNERBQUE7RUFDQSw2QkFBQTtBQUlGOztBQURBLCtFQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUFJRjtBQUhFO0VBQVUsdUJBQUE7QUFNWjtBQUxFO0VBQWEsWUFBQTtBQVFmOztBQUxBLCtFQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQVFGO0FBUEU7RUFBTSxlQUFBO0FBVVI7O0FBUEE7RUFDRSxjQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVVGOztBQVBBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFVRjs7QUFQQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVVGOztBQVBBO0VBQ0UsWUFBQTtBQVVGOztBQVBBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBVUY7O0FBUEE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFVRjtBQVJFO0VBQ0UsbUJBQUE7QUFVSjs7QUFOQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQVNGO0FBUEU7RUFDRSxtQkFBQTtBQVNKO0FBTkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQU9GOztBQUpBLCtFQUFBO0FBQ0E7RUFDRTtJQUFnQixrQkFBQTtFQVFoQjtFQVBBOztJQUNnQixXQUFBO0lBQWEsWUFBQTtFQVc3QjtFQVZBO0lBQW1CLGVBQUE7RUFhbkI7RUFYQTtJQUNFLHVCQUFBO0VBYUY7RUFWQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBWUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgUHJvZmlsIFV0aWxpc2F0ZXVyIC0gRHJlYW1zIExNU1xuICAgU3R5bGUgOiBzdHVkZW50L2luc3RydWN0b3IgbGF5b3V0ICsgU0EvQWRtaW4gYWRhcHRhdGlvbnNcbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgSURFTlRJVFkgSEVBREVSIENBUkQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucHJvZi1pZC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMThweCAyMHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzOTJDN0Q7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLC4wNik7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBBVkFUQVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucHJvZi1hdi13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbn1cblxuLnByb2YtYXYtY2lyY2xlIHtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4xOCk7XG59XG5cbi5wcm9mLWF2LWluaXRpYWwge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnByb2YtYXYtY3Jvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgcmlnaHQ6IC00cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI0ZGOTUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDI1NSwxNDksMCwuNSk7XG4gIC50aSB7IGZvbnQtc2l6ZTogMTBweDsgY29sb3I6ICNmZmY7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFJPTEUgQkFER0Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucHJvZi1yb2xlLWJhZGdlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLjNweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU0VUVElOR1MgTkFWIE9WRVJSSURFUyAocm9sZS1zcGVjaWZpYyBhY3RpdmUgY29sb3IpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnByb2Ytc2V0dGluZ3MtbmF2IGxpIGEuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXByb2YtYWNjZW50LCAjMzkyQzdEKSAhaW1wb3J0YW50O1xuICAmOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcm9mLWFjY2VudCwgIzM5MkM3RCkgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnByb2YtdGFiLWRhbmdlci1saW5rIHtcbiAgY29sb3I6IHZhcigtLXByb2YtYWNjZW50LCAjMzkyQzdEKSAhaW1wb3J0YW50O1xuICAmLmFjdGl2ZTphZnRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJvZi1hY2NlbnQsICMzOTJDN0QpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIENPTlRFTlQgQ0FSRCAobGVmdCBhY2NlbnQgYm9yZGVyIG9uIHRvcCkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucHJvZi1jb250ZW50LWNhcmQge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tcHJvZi1hY2NlbnQsICMzOTJDN0QpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZi1kYW5nZXItY2FyZCB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1wcm9mLWFjY2VudCwgIzM5MkM3RCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBTQVZFIEJVVFRPTiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5wcm9mLXNhdmUtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAmOmhvdmVyIHsgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7IH1cbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IC43OyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBQQVNTV09SRCBSVUxFUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5wcm9mLXB3LXJ1bGUge1xuICBjb2xvcjogIzljYTNhZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIC50aSB7IGZvbnQtc2l6ZTogMTNweDsgfVxufVxuXG4ucHJvZi1wdy1ydWxlLW9rIHtcbiAgY29sb3I6ICMwM0M5NUE7XG59XG5cbi5wcm9mLXBob3RvLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMnB4IDA7XG59XG5cbi5wcm9mLXBob3RvLWF2YXRhciB7XG4gIHdpZHRoOiA4OHB4O1xuICBoZWlnaHQ6IDg4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQ6ICNlNWU3ZWI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ucHJvZi1waG90by1hdmF0YXItLWluaXRpYWwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wcm9mLXBob3RvLWNvbnRlbnQge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5wcm9mLXBob3RvLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuXG4ucHJvZi1waG90by1idG4tLXVwbG9hZCB7XG4gIGJhY2tncm91bmQ6ICNlNWU3ZWI7XG4gIGNvbG9yOiAjMTExODI3O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkMWQ1ZGI7XG4gIH1cbn1cblxuLnByb2YtcGhvdG8tYnRuLS1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiAjZmY0NjY3O1xuICBjb2xvcjogI2ZmZjtcblxuICAmOmhvdmVyOmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICNlODNiNWI7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAuNjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuXG4ucHJvZi1waG90by1idG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAuNzU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgUkVTUE9OU0lWRSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucHJvZi1pZC1jYXJkIHsgcGFkZGluZzogMTRweCAxNnB4OyB9XG4gIC5wcm9mLWF2LWNpcmNsZSxcbiAgLnByb2YtYXYtd3JhcCB7IHdpZHRoOiA0NnB4OyBoZWlnaHQ6IDQ2cHg7IH1cbiAgLnByb2YtYXYtaW5pdGlhbCB7IGZvbnQtc2l6ZTogMThweDsgfVxuXG4gIC5wcm9mLXBob3RvLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAucHJvZi1waG90by1hdmF0YXIge1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGhlaWdodDogNzZweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return UserProfileComponent;
})();

/***/ }),

/***/ 92643:
/*!*************************************************!*\
  !*** ./src/app/shared/service/routes/routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = {
  // SuperAdmin Routes
  superadmin_dashboard: '/superadmin/superadmin-dashboard',
  superadmin_users: '/superadmin/superadmin-users',
  superadminSettings: '/superadmin/superadmin-settings',
  superadmin_logs: '/superadmin/superadmin-logs',
  // Admin Routes
  admin_dashboard: '/admin/admin-dashboard',
  admin_users: '/admin/admin-users',
  admin_courses: '/admin/admin-courses',
  admin_categories: '/admin/admin-categories',
  admin_blog: '/admin/admin-blog',
  admin_tickets: '/admin/admin-tickets',
  admin_payouts: '/admin/admin-payouts',
  admin_detection: '/admin/admin-detection',
  adminAnalytics: '/admin/admin-analytics',
  adminSettings: '/admin/admin-settings',
  // Recruiter Routes
  recruiter_dashboard: '/recruiter/recruiter-dashboard',
  recruiter_shared_profiles: '/recruiter/recruiter-shared-profiles',
  recruiter_certified_students: '/recruiter/recruiter-certified-students',
  recruiter_job_offers: '/recruiter/recruiter-job-offers',
  recruiter_messages: '/recruiter/recruiter-messages',
  recruiterSettings: '/recruiter/settings/recruiter-settings',
  recruiterChangePassword: '/recruiter/settings/recruiter-change-password',
  forceChangePassword: '/auth/force-change-password',
  face_register: '/auth/face-register',
  // Instructor Routes
  instructor: '/instructor/',
  instructor_dashboard: '/instructor/instructor-dashboard',
  instructor_payouts: '/instructor/instructor-payouts',
  instructor_tickets: '/instructor/instructor-tickets',
  instructorWishlist: '/instructor/instructor-wishlist',
  instructorWithdraw: '/instructor/instructor-withdraw',
  instructorProfile: '/instructor/instructor-profile',
  instructorQuizQuestion: '/instructor/instructor-quiz-questions',
  instructorQuiz: '/instructor/instructor-quiz',
  instructorCertificate: '/instructor/instructor-certificate',
  instructorEarning: '/instructor/instructor-payouts',
  instructorStatements: '/instructor/instructor-statements',
  quiz: 'quiz',
  studentsList: '/instructor/students-list',
  studentsGrid: '/instructor/students-grid',
  studentsDetails: '/instructor/students-details',
  instructorQuizResult: '/instructor/instructor-quiz-results',
  instructorCourse: '/instructor/instructor-course',
  instructorNotifications: '/instructor/notifications',
  instructorAddCourse: '/instructor/add-course',
  instructorEditCourse: '/instructor/edit-course',
  instructorMyCourses: '/instructor/instructor-course',
  instructorCourseGrid: '/instructor/instructor-course-grid',
  instructorTickets: '/instructor/instructor-tickets',
  instructorMessage: '/instructor/instructor-message',
  instructorQuizDetails: '/instructor/instructor-quiz-details',
  instructorSettingWithdraw: '/instructor/settings/instructor-setting-withdraw',
  instructorSettingNotifications: '/instructor/settings/instructor-setting-notifications',
  instructorPlans: '/instructor/settings/instructor-plans',
  instructorIntegrations: '/instructor/settings/instructor-integrations',
  instructorLinkedAccounts: '/instructor/settings/instructor-linked-accounts',
  instructorSocialProfiles: '/instructor/settings/instructor-social-profiles',
  instructorDeleteAccount: '/instructor/settings/instructor-delete-account',
  instructorChangePassword: '/instructor/settings/instructor-change-password',
  instructorSettings: '/instructor/settings/instructor-settings',
  instructorDetection: '/instructor/instructor-detection',
  instructorAnalytics: '/instructor/instructor-analytics',
  // Student Routes
  students: '/student/',
  students_profile: '/student/student-profile',
  students_Dashboard: '/student/student-dashboard',
  course_student: '/student/course-student',
  student_Certificate: '/student/student-certificate',
  student_Wishlist: '/student/student-wishlist',
  view_invoice_student: '/student/view-invoice',
  transactions_student: '/student/transactions-student',
  students_security: '/student/setting-student-security',
  students_notification: '/student/setting-student-notification',
  students_privacy: '/student/setting-student-privacy',
  students_delete: '/student/setting-student-delete-profile',
  students_accounts: '/student/setting-student-accounts',
  students_referral: '/student/student-referral',
  students_subscription: '/student/setting-student-subscription',
  students_billing: '/student/setting-student-billing',
  students_payments: '/student/setting-student-payment',
  students_invoice: '/student/setting-student-invoice',
  students_tickets: '/student/student-tickets',
  students_message: '/student/student-message',
  students_quiz_question: '/student/student-quiz-questions',
  students_quiz: '/student/student-quiz',
  studentsQuizQuestion: '/student/student-quiz-questions',
  studentsQuiz: '/student/student-quiz',
  studentProfile: '/student/student-profile',
  studentMessages: '/student/student-message',
  studentsMessage: '/student/student-message',
  studentOrderHistory: '/student/student-order-history',
  studentWishlist: '/student/student-wishlist',
  studentCourses: '/student/student-courses',
  studentMyCourses: '/student/student-my-courses',
  studentReviews: '/student/student-reviews',
  studentQuizDetails: '/student/student-quiz-details',
  studentQuiz: '/student/student-quiz',
  studentLinkedAccount: '/student/settings/student-linked-accounts',
  studentNotification: '/student/settings/student-notifications',
  students_social_profile: '/student/settings/student-social-profile',
  studentChangePassword: '/student/settings/student-change-password',
  studentSettings: '/student/settings/student-settings',
  studentBillingAddress: '/student/settings/student-billing-address',
  studentQa: '/student/student-qa',
  student_job_offers: '/student/student-job-offers',
  studentChallenges: '/student/student-challenges',
  studentPointsExchange: '/student/student-points-exchange',
  // Pages Routes
  pages: '/pages/',
  page_notifications: '/pages/notifications',
  becomeAnExpert: '/pages/become-an-instructor',
  testimonial: '/pages/testimonial',
  aboutUs: '/pages/about-us',
  contactUs: '/pages/contact-us',
  page_pricing_plan: '/pages/pricing-plan',
  page_faq: '/pages/faq',
  page_term_condition: '/pages/term-condition',
  page_privacy_policy: '/pages/privacy-policy',
  instructorDetails: '/pages/instructor-details',
  instructorGrid: '/pages/instructor-grid',
  instructorList: '/pages/instructor-list',
  // Blog Routes
  blog: '/blog/',
  blog_details_left_sidebar: '/blog/blog-details-left-sidebar',
  blog_details_right_sidebar: '/blog/blog-details-right-sidebar',
  blog_details: '/blog/blog-details',
  blog_masonry: '/blog/blog-masonry',
  blog_grid: '/blog/blog-grid',
  blog_grid2: '/blog/blog-2-grid',
  blog_grid3: '/blog/blog-3-grid',
  blog_carousal: '/blog/blog-carousal',
  blog_left_sidebar: '/blog/blog-left-sidebar',
  blog_right_sidebar: '/blog/blog-right-sidebar',
  // Auth Routes
  auth: '/auth/',
  forgot_password: '/auth/forgot-password',
  login: '/auth/login',
  register: '/auth/register',
  setPassword: '/auth/set-password',
  otp: '/auth/otp',
  lockScreen: '/auth/lock-screen',
  under_construction: '/under-construction',
  comming_soon: '/coming-soon',
  error_404: '/error-404',
  error_500: '/error-500',
  // Home Routes
  home: '/index',
  home2: '/index-two',
  home3: '/index-three',
  home4: '/index-four',
  home5: '/index-five',
  home6: '/index-six',
  // Courses Routes
  courses: '/courses',
  courseGrid: '/courses/course-grid',
  courseList: '/courses/course-list',
  courseCategory: '/courses/course-category',
  courseCategory2: '/courses/course-category-2',
  courseCategory3: '/courses/course-category-3',
  courseResume: '/courses/course-resume',
  courseWatch: '/courses/course-watch',
  cart: '/courses/cart',
  checkout: '/courses/checkout',
  courseDetails: '/courses/course-details',
  courseDetails2: '/courses/course-details-2',
  courseListPublic: '/courses/course-list-public',
  verifyCertificate: '/courses/certificates/verify',
  addCourse: '/courses/add-course',
  editCourse: '/courses/edit-course'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

}]);
//# sourceMappingURL=6901.js.map