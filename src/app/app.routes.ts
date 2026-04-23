import { Routes } from '@angular/router';
import { authGuard } from './shared/service/auth/auth.guard';
import { roleGuard } from './shared/service/auth/role.guard';
import { redirectIfLoggedGuard } from './shared/service/auth/redirect-if-logged.guard';
export const routes: Routes = [
    { path:'',
      redirectTo:'index',
      pathMatch:'full'
    },
    { path: 'auth', loadComponent:()=> import('./auth/auth.component').then((m)=>m.AuthComponent),
        children: [
            { path: 'forgot-password', loadComponent: () => import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
            { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
            { path: 'session-expired', loadComponent: () => import('./auth/session-expired/session-expired.component').then(m => m.SessionExpiredComponent) },
            { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
            { path: 'set-password', loadComponent: () => import('./auth/set-password/set-password.component').then(m => m.SetPasswordComponent) },
            { path: 'otp', loadComponent: () => import('./auth/otp/otp.component').then(m => m.OtpComponent) },
            { path: 'lock-screen', loadComponent: () => import('./auth/lock-screen/lock-screen.component').then(m => m.LockScreenComponent) },
        { path: 'face-register', loadComponent: () => import('./auth/face-register/face-register.component').then(m => m.FaceRegisterComponent) },
            { path: 'force-change-password', loadComponent: () => import('./auth/force-change-password/force-change-password.component').then(m => m.ForceChangePasswordComponent) }
        ]
    },
{path:'',loadComponent:()=>import ('./features/features.component').then((m)=>m.FeaturesComponent),
    children:[
        // Route SuperAdmin
        {path:'superadmin', canActivate:[authGuard, roleGuard('SUPERADMIN')], loadComponent:()=>import('./features/superadmin/superadmin.component').then((m)=>m.SuperadminComponent),
            children:[
                {path:'superadmin-dashboard', loadComponent:()=>import('./features/superadmin/superadmin-dashboard/superadmin-dashboard.component').then((m)=>m.SuperadminDashboardComponent)},
                {path:'superadmin-users', loadComponent:()=>import('./features/superadmin/superadmin-users/superadmin-users.component').then((m)=>m.SuperadminUsersComponent)},
                {path:'superadmin-logs', loadComponent:()=>import('./features/admin/admin-logs/admin-logs.component').then((m)=>m.AdminLogsComponent)},
                {path:'superadmin-settings', loadComponent:()=>import('./shared/components/user-profile/user-profile.component').then((m)=>m.UserProfileComponent)}
            ]
        },
        // Route Admin
        {path:'admin', canActivate:[authGuard, roleGuard('ADMIN')], loadComponent:()=>import('./features/admin/admin.component').then((m)=>m.AdminComponent),
            children:[
                {path:'', redirectTo:'admin-dashboard', pathMatch:'full'},
                {path:'admin-dashboard', loadComponent:()=>import('./features/admin/admin-dashboard/admin-dashboard.component').then((m)=>m.AdminDashboardComponent)},
                {path:'admin-users', loadComponent:()=>import('./features/admin/admin-users/admin-users.component').then((m)=>m.AdminUsersComponent)},
                {path:'admin-courses', loadComponent:()=>import('./features/admin/admin-courses/admin-courses.component').then((m)=>m.AdminCoursesComponent)},
                {path:'admin-categories', loadComponent:()=>import('./features/admin/admin-categories/admin-categories.component').then((m)=>m.AdminCategoriesComponent)},
                {path:'admin-blog',       loadComponent:()=>import('./features/admin/admin-blog/admin-blog.component').then((m)=>m.AdminBlogComponent)},
                {path:'admin-tickets',    loadComponent:()=>import('./features/admin/admin-tickets/admin-tickets.component').then((m)=>m.AdminTicketsComponent)},
                {path:'admin-payouts',    loadComponent:()=>import('./features/admin/admin-payouts/admin-payouts.component').then((m)=>m.AdminPayoutsComponent)},
                {path:'admin-detection',  loadComponent:()=>import('./features/admin/admin-detection/admin-detection.component').then((m)=>m.AdminDetectionComponent)},
                {path:'admin-analytics',   loadComponent:()=>import('./features/admin/admin-analytics/admin-analytics.component').then((m)=>m.AdminAnalyticsComponent)},
                {path:'chatbot-faq', loadComponent:()=>import('./features/admin/chatbot-faq/chatbot-faq.component').then((m)=>m.ChatbotFaqComponent)},
                {path:'admin-settings', loadComponent:()=>import('./shared/components/user-profile/user-profile.component').then((m)=>m.UserProfileComponent)}
            ]
        },
        // Route Recruiter
        {path:'recruiter', canActivate:[authGuard, roleGuard('RECRUITER')], loadComponent:()=>import('./features/recruiter/recruiter.component').then((m)=>m.RecruiterComponent),
            children:[
                {path:'recruiter-dashboard', loadComponent:()=>import('./features/recruiter/recruiter-dashboard/recruiter-dashboard.component').then((m)=>m.RecruiterDashboardComponent)},
                {path:'recruiter-shared-profiles', loadComponent:()=>import('./features/recruiter/recruiter-shared-profiles/recruiter-shared-profiles.component').then((m)=>m.RecruiterSharedProfilesComponent)},
                {path:'recruiter-certified-students', loadComponent:()=>import('./features/recruiter/recruiter-certified-students/recruiter-certified-students.component').then((m)=>m.RecruiterCertifiedStudentsComponent)},
                {path:'recruiter-job-offers', loadComponent:()=>import('./features/recruiter/recruiter-job-offers/recruiter-job-offers.component').then((m)=>m.RecruiterJobOffersComponent)},
                {path:'recruiter-messages', loadComponent:()=>import('./features/recruiter/recruiter-messages/recruiter-messages.component').then((m)=>m.RecruiterMessagesComponent)},
                {path:'settings',loadComponent:()=>import ('./features/recruiter/settings/settings.component').then((m)=>m.SettingsComponent),
                    children:[
                        {path:'', redirectTo:'recruiter-settings', pathMatch:'full'},
                        {path:'recruiter-settings',loadComponent:()=>import ('./features/recruiter/settings/recruiter-settings/recruiter-settings.component').then((m)=>m.RecruiterSettingsComponent)},
                        {path:'recruiter-change-password',loadComponent:()=>import ('./features/recruiter/settings/recruiter-change-password/recruiter-change-password.component').then((m)=>m.RecruiterChangePasswordComponent)}
                    ]
                },
                {path:'recruiter-settings', redirectTo:'settings/recruiter-settings', pathMatch:'full'}
            ]
        },
        {path:'index', canActivate:[redirectIfLoggedGuard], loadComponent:()=>import ('./features/home-list/home/home.component').then((m)=>m.HomeComponent)},
        {path:'index-two',loadComponent:()=>import ('./features/home-list/home2/home2.component').then((m)=>m.Home2Component)},
        {path:'index-three',loadComponent:()=>import ('./features/home-list/home3/home3.component').then((m)=>m.Home3Component)},
        {path:'index-four',loadComponent:()=>import ('./features/home-list/home4/home4.component').then((m)=>m.Home4Component)},
        {path:'index-five',loadComponent:()=>import ('./features/home-list/home5/home5.component').then((m)=>m.Home5Component)},
        {path:'index-six',loadComponent:()=>import ('./features/home-list/home6/home6.component').then((m)=>m.Home6Component)},
        {path:'courses',loadComponent:()=>import ('./features/courses/courses.component').then((m)=>m.CoursesComponent),
            children:[
                {path:'add-course',loadComponent:()=>import ('./features/courses/add-course/add-course.component').then((m)=>m.AddCourseComponent)},
                {path:'edit-course/:id',loadComponent:()=>import ('./features/courses/add-course/add-course.component').then((m)=>m.AddCourseComponent)},
                {path:'course-details',loadComponent:()=>import ('./features/courses/course-details-2/course-details-2.component').then((m)=>m.CourseDetails2Component)},
                {path:'course-details-2',loadComponent:()=>import ('./features/courses/course-details-2/course-details-2.component').then((m)=>m.CourseDetails2Component)},
                {path:'course-list',loadComponent:()=>import ('./features/courses/course-list/course-list.component').then((m)=>m.CourseListComponent)},
                {path:'course-grid',loadComponent:()=>import ('./features/courses/course-grid/course-grid.component').then((m)=>m.CourseGridComponent)},
                {path:'course-category',loadComponent:()=>import ('./features/courses/course-category/course-category.component').then((m)=>m.CourseCategoryComponent)},
                {path:'course-category-2',loadComponent:()=>import ('./features/courses/course-category-2/course-category-2.component').then((m)=>m.CourseCategory2Component)},
                {path:'course-category-3',loadComponent:()=>import ('./features/courses/course-category-3/course-category-3.component').then((m)=>m.CourseCategory3Component)},
                {path:'course-resume',loadComponent:()=>import ('./features/courses/course-resume/course-resume.component').then((m)=>m.CourseResumeComponent)},
                {path:'course-watch',canActivate:[authGuard],loadComponent:()=>import ('./features/courses/course-watch/course-watch.component').then((m)=>m.CourseWatchComponent)},
                {path:'cart',loadComponent:()=>import ('./features/courses/course-cart/course-cart.component').then((m)=>m.CourseCartComponent)},
                {path:'checkout',loadComponent:()=>import ('./features/courses/course-checkout/course-checkout.component').then((m)=>m.CourseCheckoutComponent)},
                {path:'course-list-public',loadComponent:()=>import ('./features/courses/course-list-public/course-list-public.component').then((m)=>m.CourseListPublicComponent)},
                {path:'certificates/verify',loadComponent:()=>import ('./features/courses/certificate-view/certificate-view.component').then((m)=>m.CertificateViewComponent)},
                {path:'certificates/verify/:code',loadComponent:()=>import ('./features/courses/certificate-view/certificate-view.component').then((m)=>m.CertificateViewComponent)},
        
            ]
        },
        {path : 'instructor',canActivate:[authGuard, roleGuard('INSTRUCTOR')],loadComponent:()=>import ('./features/instructor/instructor.component').then((m)=>m.InstructorComponent),
            children:[
                {path:'instructor-dashboard',loadComponent:()=>import ('./features/instructor/instructor-dashboard/instructor-dashboard.component').then((m)=>m.InstructorDashboardComponent)},
                {path:'instructor-profile',loadComponent:()=>import ('./features/instructor/instructor-profile/instructor-profile.component').then((m)=>m.InstructorProfileComponent)},
                {path:'instructor-payouts',loadComponent:()=>import ('./features/instructor/instructor-payouts/instructor-payouts.component').then((m)=>m.InstructorPayoutsComponent)},
                {path:'instructor-tickets',loadComponent:()=>import ('./features/instructor/instructor-tickets/instructor-tickets.component').then((m)=>m.InstructorTicketsComponent)},
                {path:'instructor-quiz-questions/:quizId',loadComponent:()=>import ('./features/instructor/instructor-quiz-questions/instructor-quiz-questions.component').then((m)=>m.InstructorQuizQuestionsComponent)},
                {path:'instructor-quiz-results/:quizId',loadComponent:()=>import ('./features/instructor/instructor-quiz-results/instructor-quiz-results.component').then((m)=>m.InstructorQuizResultsComponent)},
                {path:'instructor-quiz-results',loadComponent:()=>import ('./features/instructor/instructor-quiz-results/instructor-quiz-results.component').then((m)=>m.InstructorQuizResultsComponent)},
                {path:'instructor-quiz-details/:attemptId',loadComponent:()=>import ('./features/instructor/instructor-quiz-details/instructor-quiz-details.component').then((m)=>m.InstructorQuizDetailsComponent)},
                {path:'instructor-quiz',loadComponent:()=>import ('./features/instructor/instructor-quiz/instructor-quiz.component').then((m)=>m.InstructorQuizComponent)},
                {path:'instructor-certificate',loadComponent:()=>import ('./features/instructor/instructor-certificate/instructor-certificate.component').then((m)=>m.InstructorCertificateComponent)},
                {path:'instructor-earnings',redirectTo:'instructor-payouts',pathMatch:'full'},
                {path:'instructor-statements',redirectTo:'instructor-payouts',pathMatch:'full'},
                {path:'instructor-course',loadComponent:()=>import ('./features/instructor/instructor-course/instructor-course.component').then((m)=>m.InstructorCourseComponent)},
                {path:'instructor-course-detail',loadComponent:()=>import ('./features/instructor/instructor-course-detail/instructor-course-detail.component').then((m)=>m.InstructorCourseDetailComponent)},
                {path:'notifications',loadComponent:()=>import ('./features/pages/notifications/notifications.component').then((m)=>m.NotificationsComponent)},
                {path:'add-course',loadComponent:()=>import ('./features/courses/add-course/add-course.component').then((m)=>m.AddCourseComponent)},
                {path:'edit-course/:id',loadComponent:()=>import ('./features/courses/add-course/add-course.component').then((m)=>m.AddCourseComponent)},
                {path:'instructor-my-courses',redirectTo:'instructor-course',pathMatch:'full'},
                {path:'instructor-course-grid',loadComponent:()=>import ('./features/instructor/instructor-course-grid/instructor-course-grid.component').then((m)=>m.InstructorCourseGridComponent)},
                {path:'instructor-message',loadComponent:()=>import ('./features/instructor/instructor-message/instructor-message.component').then((m)=>m.InstructorMessageComponent)},
                {path:'students-list',loadComponent:()=>import ('./features/instructor/students-list/students-list.component').then((m)=>m.StudentsListComponent)},
                {path:'students-grid',loadComponent:()=>import ('./features/instructor/students-grid/students-grid.component').then((m)=>m.StudentsGridComponent)},
                {path:'students-details/:id',loadComponent:()=>import ('./features/instructor/students-details/students-details.component').then((m)=>m.StudentsDetailsComponent)},
                {path:'instructor-detection',loadComponent:()=>import ('./features/instructor/instructor-detection/instructor-detection.component').then((m)=>m.InstructorDetectionComponent)},
                {path:'instructor-analytics',loadComponent:()=>import ('./features/instructor/instructor-analytics/instructor-analytics.component').then((m)=>m.InstructorAnalyticsComponent)},
                {path:'settings',loadComponent:()=>import ('./features/instructor/settings/settings.component').then((m)=>m.SettingsComponent),
                    children:[
                        {path:'instructor-setting-withdraw',loadComponent:()=>import ('./features/instructor/settings/instructor-setting-withdraw/instructor-setting-withdraw.component').then((m)=>m.InstructorSettingWithdrawComponent)},
                        {path:'instructor-setting-notifications',loadComponent:()=>import ('./features/instructor/settings/instructor-setting-notifications/instructor-setting-notifications.component').then((m)=>m.InstructorSettingNotificationsComponent)},
                        {path:'instructor-plans',redirectTo:'instructor-settings',pathMatch:'full'},
                        {path:'instructor-integrations',redirectTo:'instructor-settings',pathMatch:'full'},
                        {path:'instructor-linked-accounts',redirectTo:'instructor-settings',pathMatch:'full'},
                        {path:'instructor-social-profiles',loadComponent:()=>import ('./features/instructor/settings/instructor-social-profiles/instructor-social-profiles.component').then((m)=>m.InstructorSocialProfilesComponent)},
                        {path:'instructor-change-password',loadComponent:()=>import ('./features/instructor/settings/instructor-change-password/instructor-change-password.component').then((m)=>m.InstructorChangePasswordComponent)},
                        {path:'instructor-settings',loadComponent:()=>import ('./features/instructor/settings/instructor-settings/instructor-settings.component').then((m)=>m.InstructorSettingsComponent)}
                        
                    ]
                },
            ]
        },
        { path: 'pages', loadComponent:()=>import ('./features/pages/pages.component').then((m)=>m.PagesComponent),
            children: [
                { path: 'faq', loadComponent: () => import('./features/pages/faq/faq.component').then(m => m.FaqComponent) },
                { path: 'notifications', loadComponent: () => import('./features/pages/notifications/notifications.component').then(m => m.NotificationsComponent) },
                { path: 'pricing-plan', loadComponent: () => import('./features/pages/pricing-plan/pricing-plan.component').then(m => m.PricingPlanComponent) },
                { path: 'term-condition', loadComponent: () => import('./features/pages/term-condition/term-condition.component').then(m => m.TermConditionComponent) },
                { path: 'privacy-policy', loadComponent: () => import('./features/pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
                { path: 'instructor-details/:instructorId', loadComponent: () => import('./features/pages/instructor-details/instructor-details.component').then(m => m.InstructorDetailsComponent) },
                { path: 'become-an-instructor', loadComponent: () => import('./features/pages/become-an-expert/become-an-expert.component').then(m => m.BecomeAnExpertComponent) },
                { path: 'instructor-grid', loadComponent: () => import('./features/pages/instructor-grid/instructor-grid.component').then(m => m.InstructorGridComponent) },
                { path: 'instructor-list', loadComponent: () => import('./features/pages/instructor-list/instructor-list.component').then(m => m.InstructorListComponent) },
                { path: 'contact-us', loadComponent: () => import('./features/pages/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
                { path: 'about-us', loadComponent: () => import('./features/pages/about-us/about-us.component').then(m => m.AboutUsComponent) },
                { path: 'testimonial', loadComponent: () => import('./features/pages/testimonial/testimonial.component').then(m => m.TestimonialComponent) }
            ]
        },
        { path: 'blog', loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent),
        children: [
            { path: 'blog-grid', loadComponent: () => import('./features/blog/blog-grid/blog-grid.component').then(m => m.BlogGridComponent) },
            { path: 'blog-masonry', loadComponent: () => import('./features/blog/blog-masonry/blog-masonry.component').then(m => m.BlogMasonryComponent) },
            { path: 'blog-details-left-sidebar', loadComponent: () => import('./features/blog/blog-details-left-sidebar/blog-details-left-sidebar.component').then(m => m.BlogDetailsLeftSidebarComponent) },
            { path: 'blog-details-right-sidebar', loadComponent: () => import('./features/blog/blog-details-right-sidebar/blog-details-right-sidebar.component').then(m => m.BlogDetailsRightSidebarComponent) },
            { path: 'blog-2-grid', loadComponent: () => import('./features/blog/blog-2-grid/blog-2-grid.component').then(m => m.Blog2GridComponent) },
            { path: 'blog-3-grid', loadComponent: () => import('./features/blog/blog-3-grid/blog-3-grid.component').then(m => m.Blog3GridComponent) },
            { path: 'blog-carousal', loadComponent: () => import('./features/blog/blog-carousal/blog-carousal.component').then(m => m.BlogCarousalComponent) },
            { path: 'blog-left-sidebar', loadComponent: () => import('./features/blog/blog-left-sidebar/blog-left-sidebar.component').then(m => m.BlogLeftSidebarComponent) },
            { path: 'blog-right-sidebar', loadComponent: () => import('./features/blog/blog-right-sidebar/blog-right-sidebar.component').then(m => m.BlogRightSidebarComponent) },
            { path: 'blog-details', loadComponent: () => import('./features/blog/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) }
        ]
        },
        {path : 'student',canActivate:[authGuard],loadComponent:()=>import ('./features/student/student.component').then((m)=>m.StudentComponent),
    children:[
        {path:'student-dashboard',loadComponent:()=>import ('./features/student/student-dashboard/student-dashboard.component').then((m)=>m.StudentDashboardComponent)},
        {path:'student-profile',loadComponent:()=>import ('./features/student/student-profile/student-profile.component').then((m)=>m.StudentProfileComponent)},
        {path:'student-courses',loadComponent:()=>import ('./features/student/student-courses/student-courses.component').then((m)=>m.StudentCoursesComponent)},
        {path:'student-my-courses',loadComponent:()=>import ('./features/student/student-my-courses/student-my-courses.component').then((m)=>m.StudentMyCoursesComponent)},
        {path:'student-tickets',loadComponent:()=>import ('./features/student/student-tickets/student-tickets.component').then((m)=>m.StudentTicketsComponent)},
        {path:'student-quiz',loadComponent:()=>import ('./features/student/student-quiz/student-quiz.component').then((m)=>m.StudentQuizComponent)},
        {path:'student-quiz-questions/:quizId',loadComponent:()=>import ('./features/student/student-quiz-questions/student-quiz-questions.component').then((m)=>m.StudentQuizQuestionsComponent)},
        {path:'student-certificate',loadComponent:()=>import ('./features/student/student-certificate/student-certificate.component').then((m)=>m.StudentCertificateComponent)},
        {path:'student-message',loadComponent:()=>import ('./features/student/student-message/student-message.component').then((m)=>m.StudentMessageComponent)},
        {path:'student-qa',loadComponent:()=>import ('./features/student/student-qa/student-qa.component').then((m)=>m.StudentQaComponent)},
        {path:'student-job-offers',loadComponent:()=>import ('./features/student/student-job-offers/student-job-offers.component').then((m)=>m.StudentJobOffersComponent)},
        {path:'student-challenges',loadComponent:()=>import ('./features/student/student-challenges/student-challenges.component').then((m)=>m.StudentChallengesComponent)},
        {path:'student-points-exchange',loadComponent:()=>import ('./features/student/student-points-exchange/student-points-exchange.component').then((m)=>m.StudentPointsExchangeComponent)},
        {path:'student-order-history',loadComponent:()=>import ('./features/student/student-order-history/student-order-history.component').then((m)=>m.StudentOrderHistoryComponent)},
        {path:'student-referral',loadComponent:()=>import ('./features/student/student-referral/student-referral.component').then((m)=>m.StudentReferralComponent)},
        {path:'student-reviews',loadComponent:()=>import ('./features/student/student-reviews/student-reviews.component').then((m)=>m.StudentReviewsComponent)},
        {path:'student-wishlist',loadComponent:()=>import ('./features/student/student-wishlist/student-wishlist.component').then((m)=>m.StudentWishlistComponent)},
        {path:'settings',loadComponent:()=>import ('./features/student/settings/settings.component').then((m)=>m.SettingsComponent),
            children:[
                {path:'student-linked-accounts',loadComponent:()=>import ('./features/student/settings/student-linked-accounts/student-linked-accounts.component').then((m)=>m.StudentLinkedAccountsComponent)},
                {path:'student-change-password',loadComponent:()=>import ('./features/student/settings/student-change-password/student-change-password.component').then((m)=>m.StudentChangePasswordComponent)},
                {path:'student-settings',loadComponent:()=>import ('./features/student/settings/student-settings/student-settings.component').then((m)=>m.StudentSettingsComponent)},
                {path:'student-notifications',loadComponent:()=>import ('./features/student/settings/student-notifications/student-notifications.component').then((m)=>m.StudentNotificationsComponent)},
                {path:'student-billing-address',loadComponent:()=>import ('./features/student/settings/student-billing-address/student-billing-address.component').then((m)=>m.StudentBillingAddressComponent)},
                {path:'student-social-profile',loadComponent:()=>import ('./features/student/settings/student-social-profile/student-social-profile.component').then((m)=>m.StudentSocialProfileComponent)}
            ]
        },
    ]
},


    ]

},
{ path: 'under-construction', loadComponent: () => import('./features/pages/under-construction/under-construction.component').then(m => m.UnderConstructionComponent) },
{ path: 'coming-soon', loadComponent: () => import('./features/pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent) },

{ path: 'error-500', loadComponent: () => import('./error/error500/error500.component').then(m => m.Error500Component) },
{ path: 'error-404', loadComponent: () => import('./error/error404/error404.component').then(m => m.Error404Component) },
{   
    path:'**',
    redirectTo:'error-404',
    pathMatch:'full'
}




      
]as const;
