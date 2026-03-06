import {
  AuthService
} from "./chunk-WRYOR7DN.js";
import {
  Router
} from "./chunk-TPKO67I6.js";
import {
  catchError,
  inject,
  map,
  of
} from "./chunk-5DE2SIVI.js";

// src/app/shared/service/auth/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    localStorage.setItem("pendingReturnUrl", state.url);
    router.navigate(["/auth/login"]);
    return false;
  }
  return authService.ping().pipe(
    map(() => true),
    catchError(() => of(true))
    // erreur réseau ou 423 : on laisse passer, modal gère
  );
};

// src/app/shared/service/auth/role.guard.ts
var roleGuard = (requiredRole) => {
  return () => {
    const router = inject(Router);
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role") || "";
    if (!token) {
      router.navigate(["/auth/login"]);
      return false;
    }
    if (role.includes(requiredRole)) {
      return true;
    }
    if (role.includes("SUPERADMIN")) {
      router.navigate(["/superadmin/superadmin-dashboard"]);
    } else if (role.includes("ADMIN")) {
      router.navigate(["/admin/admin-dashboard"]);
    } else if (role.includes("INSTRUCTOR")) {
      router.navigate(["/instructor/instructor-dashboard"]);
    } else if (role.includes("RECRUITER")) {
      router.navigate(["/recruiter/recruiter-dashboard"]);
    } else if (role.includes("STUDENT")) {
      router.navigate(["/student/student-dashboard"]);
    } else {
      router.navigate(["/index"]);
    }
    return false;
  };
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadComponent: () => import("./chunk-BSLQB5C4.js").then((m) => m.AuthComponent),
    children: [
      { path: "forgot-password", loadComponent: () => import("./chunk-7VG3YLYC.js").then((m) => m.ForgotPasswordComponent) },
      { path: "login", loadComponent: () => import("./chunk-LPZ2MCOI.js").then((m) => m.LoginComponent) },
      { path: "register", loadComponent: () => import("./chunk-QYYYEJWE.js").then((m) => m.RegisterComponent) },
      { path: "set-password", loadComponent: () => import("./chunk-YDENAIBW.js").then((m) => m.SetPasswordComponent) },
      { path: "otp", loadComponent: () => import("./chunk-4DQZ5JS7.js").then((m) => m.OtpComponent) },
      { path: "lock-screen", loadComponent: () => import("./chunk-GDGFJABN.js").then((m) => m.LockScreenComponent) },
      { path: "force-change-password", loadComponent: () => import("./chunk-VBV4SLNR.js").then((m) => m.ForceChangePasswordComponent) }
    ]
  },
  {
    path: "",
    loadComponent: () => import("./chunk-WXLID3YW.js").then((m) => m.FeaturesComponent),
    children: [
      // Route SuperAdmin
      {
        path: "superadmin",
        canActivate: [authGuard, roleGuard("SUPERADMIN")],
        loadComponent: () => import("./chunk-52PKPDDY.js").then((m) => m.SuperadminComponent),
        children: [
          { path: "superadmin-dashboard", loadComponent: () => import("./chunk-C4Y5W2GR.js").then((m) => m.SuperadminDashboardComponent) },
          { path: "superadmin-users", loadComponent: () => import("./chunk-EZ6WCTDZ.js").then((m) => m.SuperadminUsersComponent) },
          { path: "superadmin-settings", loadComponent: () => import("./chunk-Y3ATFI3W.js").then((m) => m.UserProfileComponent) }
        ]
      },
      // Route Admin
      {
        path: "admin",
        canActivate: [authGuard, roleGuard("ADMIN")],
        loadComponent: () => import("./chunk-5DLUD76E.js").then((m) => m.AdminComponent),
        children: [
          { path: "admin-dashboard", loadComponent: () => import("./chunk-M432B666.js").then((m) => m.AdminDashboardComponent) },
          { path: "admin-users", loadComponent: () => import("./chunk-RN3FXECD.js").then((m) => m.AdminUsersComponent) },
          { path: "admin-courses", loadComponent: () => import("./chunk-BT5I3DYO.js").then((m) => m.AdminCoursesComponent) },
          { path: "admin-categories", loadComponent: () => import("./chunk-4HW75777.js").then((m) => m.AdminCategoriesComponent) },
          { path: "admin-settings", loadComponent: () => import("./chunk-Y3ATFI3W.js").then((m) => m.UserProfileComponent) }
        ]
      },
      // Route Recruiter
      {
        path: "recruiter",
        canActivate: [authGuard, roleGuard("RECRUITER")],
        loadComponent: () => import("./chunk-DTPXX2KD.js").then((m) => m.RecruiterComponent),
        children: [
          { path: "recruiter-dashboard", loadComponent: () => import("./chunk-5Q7F3QP4.js").then((m) => m.RecruiterDashboardComponent) },
          { path: "recruiter-shared-profiles", loadComponent: () => import("./chunk-BK2HZ5TL.js").then((m) => m.RecruiterSharedProfilesComponent) },
          { path: "recruiter-settings", loadComponent: () => import("./chunk-Y3ATFI3W.js").then((m) => m.UserProfileComponent) }
        ]
      },
      { path: "index", loadComponent: () => import("./chunk-56QCUMX7.js").then((m) => m.HomeComponent) },
      { path: "index-two", loadComponent: () => import("./chunk-DIUK3V7A.js").then((m) => m.Home2Component) },
      { path: "index-three", loadComponent: () => import("./chunk-VURAJZ5A.js").then((m) => m.Home3Component) },
      { path: "index-four", loadComponent: () => import("./chunk-GV57GPQP.js").then((m) => m.Home4Component) },
      { path: "index-five", loadComponent: () => import("./chunk-VYTJFUZJ.js").then((m) => m.Home5Component) },
      { path: "index-six", loadComponent: () => import("./chunk-G7IUXNGY.js").then((m) => m.Home6Component) },
      {
        path: "courses",
        loadComponent: () => import("./chunk-USZVTMHP.js").then((m) => m.CoursesComponent),
        children: [
          { path: "add-course", loadComponent: () => import("./chunk-F53WOYBI.js").then((m) => m.AddCourseComponent) },
          { path: "course-details", loadComponent: () => import("./chunk-AHYJC2ZM.js").then((m) => m.CourseDetails2Component) },
          { path: "course-details-2", loadComponent: () => import("./chunk-AHYJC2ZM.js").then((m) => m.CourseDetails2Component) },
          { path: "course-list", loadComponent: () => import("./chunk-JSM2IBNF.js").then((m) => m.CourseListComponent) },
          { path: "course-grid", loadComponent: () => import("./chunk-6KYX5RR3.js").then((m) => m.CourseGridComponent) },
          { path: "course-category", loadComponent: () => import("./chunk-UGYW7UDD.js").then((m) => m.CourseCategoryComponent) },
          { path: "course-category-2", loadComponent: () => import("./chunk-MWO5ZJER.js").then((m) => m.CourseCategory2Component) },
          { path: "course-category-3", loadComponent: () => import("./chunk-QRYPYAZL.js").then((m) => m.CourseCategory3Component) },
          { path: "course-resume", loadComponent: () => import("./chunk-OMK3F7D2.js").then((m) => m.CourseResumeComponent) },
          { path: "course-watch", loadComponent: () => import("./chunk-YBM3OBMO.js").then((m) => m.CourseWatchComponent) },
          { path: "cart", loadComponent: () => import("./chunk-YOJOOGAO.js").then((m) => m.CourseCartComponent) },
          { path: "checkout", loadComponent: () => import("./chunk-2ML4MQD2.js").then((m) => m.CourseCheckoutComponent) },
          { path: "course-list-public", loadComponent: () => import("./chunk-YBWOFYKB.js").then((m) => m.CourseListPublicComponent) },
          { path: "certificates/verify", loadComponent: () => import("./chunk-T3EBYHRV.js").then((m) => m.CertificateViewComponent) },
          { path: "certificates/verify/:code", loadComponent: () => import("./chunk-T3EBYHRV.js").then((m) => m.CertificateViewComponent) },
          { path: "add-course", loadComponent: () => import("./chunk-F53WOYBI.js").then((m) => m.AddCourseComponent) }
        ]
      },
      {
        path: "instructor",
        canActivate: [authGuard, roleGuard("INSTRUCTOR")],
        loadComponent: () => import("./chunk-J35YWOUI.js").then((m) => m.InstructorComponent),
        children: [
          { path: "instructor-dashboard", loadComponent: () => import("./chunk-RPT4SLZF.js").then((m) => m.InstructorDashboardComponent) },
          { path: "instructor-profile", loadComponent: () => import("./chunk-ILSI4F2R.js").then((m) => m.InstructorProfileComponent) },
          { path: "instructor-payouts", loadComponent: () => import("./chunk-V6Y5SFVV.js").then((m) => m.InstructorPayoutsComponent) },
          { path: "instructor-tickets", loadComponent: () => import("./chunk-LWM4ORGK.js").then((m) => m.InstructorTicketsComponent) },
          { path: "instructor-announcements", loadComponent: () => import("./chunk-GHHIXOQG.js").then((m) => m.InstructorAnnouncementsComponent) },
          { path: "instructor-quiz-questions/:quizId", loadComponent: () => import("./chunk-W64EMMC7.js").then((m) => m.InstructorQuizQuestionsComponent) },
          { path: "instructor-quiz-results/:quizId", loadComponent: () => import("./chunk-JLCHSXFC.js").then((m) => m.InstructorQuizResultsComponent) },
          { path: "instructor-quiz-results", loadComponent: () => import("./chunk-JLCHSXFC.js").then((m) => m.InstructorQuizResultsComponent) },
          { path: "instructor-quiz-details/:attemptId", loadComponent: () => import("./chunk-7XSF2OCA.js").then((m) => m.InstructorQuizDetailsComponent) },
          { path: "instructor-quiz", loadComponent: () => import("./chunk-E4AVKOT3.js").then((m) => m.InstructorQuizComponent) },
          { path: "instructor-certificate", loadComponent: () => import("./chunk-JHJIZPWL.js").then((m) => m.InstructorCertificateComponent) },
          { path: "instructor-earnings", loadComponent: () => import("./chunk-GPZCZUKN.js").then((m) => m.InstructorEarningsComponent) },
          { path: "instructor-statements", loadComponent: () => import("./chunk-MA44FOSO.js").then((m) => m.InstructorStatementsComponent) },
          { path: "instructor-course", loadComponent: () => import("./chunk-UFIMPHUS.js").then((m) => m.InstructorCourseComponent) },
          { path: "instructor-course-detail", loadComponent: () => import("./chunk-TZ32M3VY.js").then((m) => m.InstructorCourseDetailComponent) },
          { path: "instructor-my-courses", loadComponent: () => import("./chunk-P6BGDXAU.js").then((m) => m.InstructorMyCoursesComponent) },
          { path: "instructor-course-grid", loadComponent: () => import("./chunk-NL4SQJKS.js").then((m) => m.InstructorCourseGridComponent) },
          { path: "instructor-message", loadComponent: () => import("./chunk-S5NLZME3.js").then((m) => m.InstructorMessageComponent) },
          { path: "instructor-assignment", loadComponent: () => import("./chunk-3UI3IIKK.js").then((m) => m.InstructorAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-CDVT4GNV.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-7RIXPM4T.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-GSZ47WUD.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-AMTTXGVO.js").then((m) => m.SettingsComponent),
            children: [
              { path: "instructor-setting-withdraw", loadComponent: () => import("./chunk-3WMZRUNE.js").then((m) => m.InstructorSettingWithdrawComponent) },
              { path: "instructor-setting-notifications", loadComponent: () => import("./chunk-6AU7767E.js").then((m) => m.InstructorSettingNotificationsComponent) },
              { path: "instructor-plans", loadComponent: () => import("./chunk-FV2ZV7FX.js").then((m) => m.InstructorPlansComponent) },
              { path: "instructor-integrations", loadComponent: () => import("./chunk-3COYAZTQ.js").then((m) => m.InstructorIntegrationsComponent) },
              { path: "instructor-linked-accounts", loadComponent: () => import("./chunk-B5PD3MVY.js").then((m) => m.InstructorLinkedAccountsComponent) },
              { path: "instructor-social-profiles", loadComponent: () => import("./chunk-XDAPXIGE.js").then((m) => m.InstructorSocialProfilesComponent) },
              { path: "instructor-change-password", loadComponent: () => import("./chunk-A6U34V5C.js").then((m) => m.InstructorChangePasswordComponent) },
              { path: "instructor-settings", loadComponent: () => import("./chunk-FAJU3Y2M.js").then((m) => m.InstructorSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "pages",
        loadComponent: () => import("./chunk-ZO5QV5IP.js").then((m) => m.PagesComponent),
        children: [
          { path: "faq", loadComponent: () => import("./chunk-ITYHPSW7.js").then((m) => m.FaqComponent) },
          { path: "notifications", loadComponent: () => import("./chunk-SSN2GL6M.js").then((m) => m.NotificationsComponent) },
          { path: "pricing-plan", loadComponent: () => import("./chunk-GUDIDNZ7.js").then((m) => m.PricingPlanComponent) },
          { path: "term-condition", loadComponent: () => import("./chunk-BHTDK5A3.js").then((m) => m.TermConditionComponent) },
          { path: "privacy-policy", loadComponent: () => import("./chunk-W5QFX2MS.js").then((m) => m.PrivacyPolicyComponent) },
          { path: "instructor-details/:instructorId", loadComponent: () => import("./chunk-FZCZARZ3.js").then((m) => m.InstructorDetailsComponent) },
          { path: "become-an-instructor", loadComponent: () => import("./chunk-AD2W4AK3.js").then((m) => m.BecomeAnExpertComponent) },
          { path: "instructor-grid", loadComponent: () => import("./chunk-X2X5XQDY.js").then((m) => m.InstructorGridComponent) },
          { path: "instructor-list", loadComponent: () => import("./chunk-KQRY7VSA.js").then((m) => m.InstructorListComponent) },
          { path: "contact-us", loadComponent: () => import("./chunk-UHQMETYT.js").then((m) => m.ContactUsComponent) },
          { path: "about-us", loadComponent: () => import("./chunk-DDIV64VE.js").then((m) => m.AboutUsComponent) },
          { path: "testimonial", loadComponent: () => import("./chunk-SIPV6NXI.js").then((m) => m.TestimonialComponent) }
        ]
      },
      {
        path: "blog",
        loadComponent: () => import("./chunk-W5A4INL6.js").then((m) => m.BlogComponent),
        children: [
          { path: "blog-grid", loadComponent: () => import("./chunk-JODAIEZ2.js").then((m) => m.BlogGridComponent) },
          { path: "blog-masonry", loadComponent: () => import("./chunk-ISGJLP6O.js").then((m) => m.BlogMasonryComponent) },
          { path: "blog-details-left-sidebar", loadComponent: () => import("./chunk-CVTT5EAG.js").then((m) => m.BlogDetailsLeftSidebarComponent) },
          { path: "blog-details-right-sidebar", loadComponent: () => import("./chunk-E2PG7TEN.js").then((m) => m.BlogDetailsRightSidebarComponent) },
          { path: "blog-2-grid", loadComponent: () => import("./chunk-JNMZXXOZ.js").then((m) => m.Blog2GridComponent) },
          { path: "blog-3-grid", loadComponent: () => import("./chunk-E4YOBZEC.js").then((m) => m.Blog3GridComponent) },
          { path: "blog-carousal", loadComponent: () => import("./chunk-BZUMLAK2.js").then((m) => m.BlogCarousalComponent) },
          { path: "blog-left-sidebar", loadComponent: () => import("./chunk-6N3M3V42.js").then((m) => m.BlogLeftSidebarComponent) },
          { path: "blog-right-sidebar", loadComponent: () => import("./chunk-GV6AAI4M.js").then((m) => m.BlogRightSidebarComponent) },
          { path: "blog-details", loadComponent: () => import("./chunk-2SQKAADC.js").then((m) => m.BlogDetailsComponent) }
        ]
      },
      {
        path: "student",
        canActivate: [authGuard],
        loadComponent: () => import("./chunk-NPAKKF7Y.js").then((m) => m.StudentComponent),
        children: [
          { path: "student-dashboard", loadComponent: () => import("./chunk-NQBMQB7I.js").then((m) => m.StudentDashboardComponent) },
          { path: "student-profile", loadComponent: () => import("./chunk-MLJPTZRE.js").then((m) => m.StudentProfileComponent) },
          { path: "student-courses", loadComponent: () => import("./chunk-VSTMK4OQ.js").then((m) => m.StudentCoursesComponent) },
          { path: "student-my-courses", loadComponent: () => import("./chunk-UVM3U4WS.js").then((m) => m.StudentMyCoursesComponent) },
          { path: "student-tickets", loadComponent: () => import("./chunk-XZBGQYPG.js").then((m) => m.StudentTicketsComponent) },
          { path: "student-quiz", loadComponent: () => import("./chunk-ZMW4ODWM.js").then((m) => m.StudentQuizComponent) },
          { path: "student-quiz-questions/:quizId", loadComponent: () => import("./chunk-CAMIUEEH.js").then((m) => m.StudentQuizQuestionsComponent) },
          { path: "student-certificate", loadComponent: () => import("./chunk-GKQO5JIQ.js").then((m) => m.StudentCertificateComponent) },
          { path: "student-message", loadComponent: () => import("./chunk-GYUCTPXF.js").then((m) => m.StudentMessageComponent) },
          { path: "student-qa", loadComponent: () => import("./chunk-AGMHBA7K.js").then((m) => m.StudentQaComponent) },
          { path: "student-order-history", loadComponent: () => import("./chunk-N4A7D7SO.js").then((m) => m.StudentOrderHistoryComponent) },
          { path: "student-referral", loadComponent: () => import("./chunk-ULQCGJ52.js").then((m) => m.StudentReferralComponent) },
          { path: "student-reviews", loadComponent: () => import("./chunk-QYIEQZ5E.js").then((m) => m.StudentReviewsComponent) },
          { path: "student-wishlist", loadComponent: () => import("./chunk-QTABYN7M.js").then((m) => m.StudentWishlistComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-MSHEMNNH.js").then((m) => m.SettingsComponent),
            children: [
              { path: "student-linked-accounts", loadComponent: () => import("./chunk-ONYQ4C3D.js").then((m) => m.StudentLinkedAccountsComponent) },
              { path: "student-change-password", loadComponent: () => import("./chunk-OOKHVFJN.js").then((m) => m.StudentChangePasswordComponent) },
              { path: "student-settings", loadComponent: () => import("./chunk-G6MD7FH4.js").then((m) => m.StudentSettingsComponent) },
              { path: "student-notifications", loadComponent: () => import("./chunk-44IRIFYC.js").then((m) => m.StudentNotificationsComponent) },
              { path: "student-billing-address", loadComponent: () => import("./chunk-RV22GB3T.js").then((m) => m.StudentBillingAddressComponent) },
              { path: "student-social-profile", loadComponent: () => import("./chunk-4JJWMG6Y.js").then((m) => m.StudentSocialProfileComponent) }
            ]
          }
        ]
      }
    ]
  },
  { path: "under-construction", loadComponent: () => import("./chunk-JHSNDKZ5.js").then((m) => m.UnderConstructionComponent) },
  { path: "coming-soon", loadComponent: () => import("./chunk-NVYZSBGW.js").then((m) => m.ComingSoonComponent) },
  { path: "error-500", loadComponent: () => import("./chunk-PAXDMCGX.js").then((m) => m.Error500Component) },
  { path: "error-404", loadComponent: () => import("./chunk-PKRVK7F7.js").then((m) => m.Error404Component) },
  {
    path: "**",
    redirectTo: "error-404",
    pathMatch: "full"
  }
];

export {
  routes
};
//# sourceMappingURL=chunk-GWOFOLTO.js.map
