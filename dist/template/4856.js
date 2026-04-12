"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[4856],{

/***/ 4856:
/*!*********************************************************!*\
  !*** ./src/app/shared/service/course/course.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseService: () => (/* binding */ CourseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 63855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);




/**
 * Service Angular pour gérer les cours (CRUD, curriculum, cart, wishlist,
 * progression vidéo, reviews, ressources, paiement Stripe).
 *
 * Le token JWT est ajouté automatiquement par l'intercepteur (auth.interceptor.ts).
 */
let CourseService = /*#__PURE__*/(() => {
  class CourseService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  ENDPOINTS PUBLICS
    // ═══════════════════════════════════════════════════════════════════════
    /** Liste des cours publiés avec paramètres de recherche optionnels */
    getPublishedCourses(search, categoryId, level) {
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
      if (search) params = params.set('search', search);
      if (categoryId) params = params.set('categoryId', categoryId.toString());
      if (level) params = params.set('level', level);
      return this.http.get(`${this.apiUrl}/courses`, {
        params
      });
    }
    /** Cours mis en avant */
    getFeaturedCourses() {
      return this.http.get(`${this.apiUrl}/courses/featured`);
    }
    /** Détail public d'un cours (avec sections/leçons masquées) */
    getCourseDetail(courseId) {
      return this.http.get(`${this.apiUrl}/courses/${courseId}`);
    }
    /** Contenu complet du cours (sections + leçons) — nécessite d'avoir payé */
    getCourseContent(courseId) {
      return this.http.get(`${this.apiUrl}/courses/${courseId}/content`);
    }
    /** Toutes les catégories */
    getCategories() {
      return this.http.get(`${this.apiUrl}/public/categories`);
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  ENDPOINTS INSTRUCTOR
    // ═══════════════════════════════════════════════════════════════════════
    /** Créer un nouveau cours */
    createCourse(data) {
      return this.http.post(`${this.apiUrl}/instructor/courses`, data);
    }
    /** Liste de mes cours (en tant qu'instructeur) */
    getMyCourses() {
      return this.http.get(`${this.apiUrl}/instructor/courses`);
    }
    /** Détail d'un de mes cours */
    getMyCourse(courseId) {
      return this.http.get(`${this.apiUrl}/instructor/courses/${courseId}`);
    }
    /** Mettre à jour un cours */
    updateCourse(courseId, data) {
      return this.http.put(`${this.apiUrl}/instructor/courses/${courseId}`, data);
    }
    /** Supprimer un cours */
    deleteCourse(courseId) {
      return this.http.delete(`${this.apiUrl}/instructor/courses/${courseId}`);
    }
    /** Soumettre un cours pour validation (DRAFT → PENDING) */
    submitForReview(courseId) {
      return this.http.put(`${this.apiUrl}/instructor/courses/${courseId}/submit`, {});
    }
    /** Archiver un cours (PUBLISHED → ARCHIVED) */
    archiveCourse(courseId) {
      return this.http.put(`${this.apiUrl}/instructor/courses/${courseId}/archive`, {});
    }
    /** Désarchiver un cours (ARCHIVED → PUBLISHED) */
    unarchiveCourse(courseId) {
      return this.http.put(`${this.apiUrl}/instructor/courses/${courseId}/unarchive`, {});
    }
    /** Ajouter une section à un cours */
    addSection(courseId, data) {
      return this.http.post(`${this.apiUrl}/instructor/courses/${courseId}/sections`, data);
    }
    /** Mettre à jour le titre d'une section */
    updateSection(courseId, sectionId, data) {
      return this.http.put(`${this.apiUrl}/instructor/courses/${courseId}/sections/${sectionId}`, data);
    }
    /** Ajouter une leçon à une section */
    addLesson(sectionId, data) {
      return this.http.post(`${this.apiUrl}/instructor/courses/sections/${sectionId}/lessons`, data);
    }
    /** Sauvegarder le contenu article (TEXT) d'une leçon */
    saveArticleContent(lessonId, content) {
      return this.http.put(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/article`, {
        content
      });
    }
    /** Uploader l'image de couverture d'un cours */
    uploadCoverImage(courseId, file) {
      const formData = new FormData();
      formData.append('file', file);
      return this.http.post(`${this.apiUrl}/instructor/courses/${courseId}/cover`, formData);
    }
    setPresetCover(courseId, imageName) {
      return this.http.put(`${this.apiUrl}/instructor/courses/${courseId}/cover-preset?imageName=${encodeURIComponent(imageName)}`, {});
    }
    /** Uploader une vidéo pour une leçon */
    uploadLessonVideo(lessonId, file) {
      const formData = new FormData();
      formData.append('file', file);
      return this.http.post(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/video`, formData);
    }
    /** Uploader un PDF pour une leçon */
    uploadLessonPdf(lessonId, file) {
      const formData = new FormData();
      formData.append('file', file);
      return this.http.post(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/pdf`, formData);
    }
    /** Modifier le titre / accès d’une leçon */
    updateLesson(lessonId, data) {
      return this.http.put(`${this.apiUrl}/instructor/courses/lessons/${lessonId}`, data);
    }
    /** Supprimer une leçon entière */
    deleteLesson(lessonId) {
      return this.http.delete(`${this.apiUrl}/instructor/courses/lessons/${lessonId}`);
    }
    /** Supprimer la vidéo d'une leçon */
    deleteLessonVideo(lessonId) {
      return this.http.delete(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/video`);
    }
    /** Supprimer le PDF d'une leçon */
    deleteLessonPdf(lessonId) {
      return this.http.delete(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/pdf`);
    }
    /** Supprimer l'article d'une leçon */
    deleteLessonArticle(lessonId) {
      return this.http.delete(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/article`);
    }
    /** Récupérer les ressources d'une leçon */
    getLessonResources(lessonId) {
      return this.http.get(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/resources`);
    }
    /** Ajouter une ressource à une leçon */
    addLessonResource(lessonId, data) {
      return this.http.post(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/resources`, data);
    }
    /** Supprimer une ressource */
    deleteLessonResource(resourceId) {
      return this.http.delete(`${this.apiUrl}/instructor/courses/lessons/resources/${resourceId}`);
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  PANIER (CART) — nécessite rôle STUDENT
    // ═══════════════════════════════════════════════════════════════════════
    /** Mes cours achetés (enrolled) */
    getMyEnrolledCourses() {
      return this.http.get(`${this.apiUrl}/student/my-courses`);
    }
    /** Inscription gratuite (cours à prix 0) */
    enrollFree(courseId) {
      return this.http.post(`${this.apiUrl}/student/enroll-free/${courseId}`, {});
    }
    /** Contenu du panier */
    getCart() {
      return this.http.get(`${this.apiUrl}/student/cart`);
    }
    /** Nombre d'articles dans le panier */
    getCartCount() {
      return this.http.get(`${this.apiUrl}/student/cart/count`);
    }
    /** Ajouter un cours au panier */
    addToCart(courseId) {
      return this.http.post(`${this.apiUrl}/student/cart/${courseId}`, {});
    }
    /** Retirer un cours du panier */
    removeFromCart(courseId) {
      return this.http.delete(`${this.apiUrl}/student/cart/${courseId}`, {
        responseType: 'text'
      });
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  LISTE DE SOUHAITS (WISHLIST) — nécessite rôle STUDENT
    // ═══════════════════════════════════════════════════════════════════════
    /** Contenu de la wishlist */
    getWishlist() {
      return this.http.get(`${this.apiUrl}/student/wishlist`);
    }
    /** Ajouter un cours à la wishlist */
    addToWishlist(courseId) {
      return this.http.post(`${this.apiUrl}/student/wishlist/${courseId}`, {}, {
        responseType: 'text'
      });
    }
    /** Retirer un cours de la wishlist */
    removeFromWishlist(courseId) {
      return this.http.delete(`${this.apiUrl}/student/wishlist/${courseId}`, {
        responseType: 'text'
      });
    }
    /** Vérifier si un cours est dans la wishlist */
    checkWishlist(courseId) {
      return this.http.get(`${this.apiUrl}/student/wishlist/${courseId}/check`);
    }
    /** Déplacer un cours de la wishlist vers le panier */
    moveToCart(courseId) {
      return this.http.post(`${this.apiUrl}/student/wishlist/${courseId}/move-to-cart`, {}, {
        responseType: 'text'
      });
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  PROGRESSION — nécessite rôle STUDENT
    // ═══════════════════════════════════════════════════════════════════════
    /** Récupérer la progression sur une leçon (watchedSeconds pour reprendre) */
    getLessonProgress(lessonId) {
      return this.http.get(`${this.apiUrl}/student/progress/lesson/${lessonId}`);
    }
    /** Sauvegarder la progression (toutes les 30s) */
    saveProgress(lessonId, watchedSeconds) {
      return this.http.put(`${this.apiUrl}/student/progress/lesson/${lessonId}`, {
        watchedSeconds
      });
    }
    /** Marquer une leçon comme terminée */
    markLessonCompleted(lessonId) {
      return this.http.post(`${this.apiUrl}/student/progress/lesson/${lessonId}/complete`, {});
    }
    /** Progression globale sur un cours (pourcentage) */
    getCourseProgress(courseId) {
      return this.http.get(`${this.apiUrl}/student/progress/course/${courseId}`);
    }
    /** Liste de mes cours avec progression */
    getMyCourseProgress() {
      return this.http.get(`${this.apiUrl}/student/progress/my-courses`);
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  AVIS / REVIEWS — nécessite rôle STUDENT
    // ═══════════════════════════════════════════════════════════════════════
    /** Récupérer les avis d'un cours (public) */
    getCourseReviews(courseId) {
      return this.http.get(`${this.apiUrl}/public/courses/${courseId}/reviews`);
    }
    /** Créer ou mettre à jour son avis sur un cours */
    upsertReview(courseId, data) {
      return this.http.post(`${this.apiUrl}/student/courses/${courseId}/reviews`, data);
    }
    /** Supprimer son avis */
    deleteReview(courseId) {
      return this.http.delete(`${this.apiUrl}/student/courses/${courseId}/reviews`);
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  ENDPOINTS ADMIN
    // ═══════════════════════════════════════════════════════════════════════
    /** Liste des cours en attente de validation */
    getPendingCourses() {
      return this.http.get(`${this.apiUrl}/admin/courses/pending`);
    }
    /** Détail d'un cours (vue admin) */
    getCourseForAdmin(courseId) {
      return this.http.get(`${this.apiUrl}/admin/courses/${courseId}`);
    }
    /** Approuver ou rejeter un cours */
    reviewCourse(courseId, review) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/review`, review);
    }
    /** Liste des cours publiés (vue admin) */
    getPublishedCoursesForAdmin() {
      return this.http.get(`${this.apiUrl}/admin/courses/published`);
    }
    /** Tous les cours toutes statuts (vue admin) */
    getAllCoursesForAdmin() {
      return this.http.get(`${this.apiUrl}/admin/courses/all`);
    }
    /** Admin: supprimer un cours */
    adminDeleteCourse(courseId) {
      return this.http.delete(`${this.apiUrl}/admin/courses/${courseId}`, {
        responseType: 'text'
      });
    }
    /** Admin: archiver un cours */
    adminArchiveCourse(courseId) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/archive`, {});
    }
    /** Admin: désarchiver un cours (ARCHIVED → PUBLISHED) */
    adminUnarchiveCourse(courseId) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/unarchive`, {});
    }
    /** Admin: liste des cours archivés */
    getArchivedCoursesForAdmin() {
      return this.http.get(`${this.apiUrl}/admin/courses/archived`);
    }
    /** Admin: modifier le prix d'un cours */
    adminUpdatePrice(courseId, price) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/price`, {
        price
      });
    }
    /** Admin: mettre un cours en promotion */
    adminSetPromotion(courseId, discountPrice, discountEndsAt) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/promotion`, {
        discountPrice,
        discountEndsAt
      });
    }
    /** Admin: modifier le contenu d'un cours (titre, description, niveau, langue...) */
    adminEditCourse(courseId, data) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/edit`, data);
    }
    /** Admin: supprimer un avis */
    adminDeleteReview(reviewId) {
      return this.http.delete(`${this.apiUrl}/admin/courses/reviews/${reviewId}`);
    }
    /** Admin: activer/désactiver le featured d'un cours */
    toggleFeatured(courseId, featured) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/featured`, {
        featured
      });
    }
    /** Admin: cours avec modifications en attente */
    getCoursesWithPendingEdits() {
      return this.http.get(`${this.apiUrl}/admin/courses/pending-edits`);
    }
    /** Admin: approuver une modification en attente */
    approvePendingEdit(courseId) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/approve-edit`, {});
    }
    /** Admin: rejeter une modification en attente */
    rejectPendingEdit(courseId, reason) {
      return this.http.put(`${this.apiUrl}/admin/courses/${courseId}/reject-edit`, {
        reason
      });
    }
    /** Instructor: voir les reviews d'un de ses cours */
    getInstructorCourseReviews(courseId) {
      return this.http.get(`${this.apiUrl}/instructor/courses/${courseId}/reviews`);
    }
    /** Instructor: liste des étudiants inscrits dans ses cours avec progression */
    getInstructorStudents() {
      return this.http.get(`${this.apiUrl}/instructor/courses/students`);
    }
    /** Instructor: tableau de bord revenus (totalRevenue, totalStudents, perCourse, monthly) */
    getInstructorRevenue() {
      return this.http.get(`${this.apiUrl}/instructor/revenue`);
    }
    /** Admin: créer une catégorie */
    createCategory(data) {
      return this.http.post(`${this.apiUrl}/admin/categories`, data);
    }
    /** Admin: modifier une catégorie */
    updateCategory(id, data) {
      return this.http.put(`${this.apiUrl}/admin/categories/${id}`, data);
    }
    /** Admin: supprimer une catégorie */
    deleteCategory(id) {
      return this.http.delete(`${this.apiUrl}/admin/categories/${id}`, {
        responseType: 'text'
      });
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  PAIEMENT STRIPE
    // ═══════════════════════════════════════════════════════════════════════
    /** Créer une session de paiement Stripe → retourne l'URL de redirection */
    createCheckoutSession(courseId, couponCode) {
      const body = {
        courseId
      };
      if (couponCode) {
        body.couponCode = couponCode;
      }
      return this.http.post(`${this.apiUrl}/payment/create-session`, body);
    }
    /** Vérifier si le student a payé un cours */
    checkPayment(courseId) {
      return this.http.get(`${this.apiUrl}/payment/check/${courseId}`);
    }
    static ɵfac = function CourseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CourseService,
      factory: CourseService.ɵfac,
      providedIn: 'root'
    });
  }
  return CourseService;
})();

/***/ })

}]);
//# sourceMappingURL=4856.js.map