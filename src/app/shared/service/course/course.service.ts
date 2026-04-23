import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

/**
 * Service Angular pour gérer les cours (CRUD, curriculum, cart, wishlist,
 * progression vidéo, reviews, ressources, paiement Stripe).
 *
 * Le token JWT est ajouté automatiquement par l'intercepteur (auth.interceptor.ts).
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ═══════════════════════════════════════════════════════════════════════
  //  ENDPOINTS PUBLICS
  // ═══════════════════════════════════════════════════════════════════════

  /** Liste des cours publiés avec paramètres de recherche optionnels */
  getPublishedCourses(search?: string, categoryId?: number, level?: string): Observable<any[]> {
    let params = new HttpParams();
    if (search)     params = params.set('search', search);
    if (categoryId) params = params.set('categoryId', categoryId.toString());
    if (level)      params = params.set('level', level);
    return this.http.get<any[]>(`${this.apiUrl}/courses`, { params });
  }

  /** Cours mis en avant */
  getFeaturedCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/courses/featured`);
  }

  /** Détail public d'un cours (avec sections/leçons masquées) */
  getCourseDetail(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/courses/${courseId}`);
  }

  /** Contenu complet du cours (sections + leçons) — nécessite d'avoir payé */
  getCourseContent(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/courses/${courseId}/content`);
  }

  /** Toutes les catégories */
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/public/categories`);
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  ENDPOINTS INSTRUCTOR
  // ═══════════════════════════════════════════════════════════════════════

  /** Créer un nouveau cours */
  createCourse(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/instructor/courses`, data);
  }

  /** Liste de mes cours (en tant qu'instructeur) */
  getMyCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/instructor/courses`);
  }

  /** Détail d'un de mes cours */
  getMyCourse(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/instructor/courses/${courseId}`);
  }

  /** Mettre à jour un cours */
  updateCourse(courseId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/instructor/courses/${courseId}`, data);
  }

  /** Supprimer un cours */
  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/instructor/courses/${courseId}`);
  }

  /** Soumettre un cours pour validation (DRAFT → PENDING) */
  submitForReview(courseId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/instructor/courses/${courseId}/submit`, {});
  }

  /** Archiver un cours (PUBLISHED → ARCHIVED) */
  archiveCourse(courseId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/instructor/courses/${courseId}/archive`, {});
  }

  /** Désarchiver un cours (ARCHIVED → PUBLISHED) */
  unarchiveCourse(courseId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/instructor/courses/${courseId}/unarchive`, {});
  }

  /** Ajouter une section à un cours */
  addSection(courseId: number, data: { title: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/instructor/courses/${courseId}/sections`, data);
  }

  /** Mettre à jour le titre d'une section */
  updateSection(courseId: number, sectionId: number, data: { title: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/instructor/courses/${courseId}/sections/${sectionId}`, data);
  }

  /** Ajouter une leçon à une section */
  addLesson(sectionId: number, data: { title: string; lessonType?: string; isFree?: boolean; videoUrl?: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/instructor/courses/sections/${sectionId}/lessons`, data);
  }

  /** Sauvegarder le contenu article (TEXT) d'une leçon */
  saveArticleContent(lessonId: number, content: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/article`, { content });
  }

  /** Uploader l'image de couverture d'un cours */
  uploadCoverImage(courseId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/instructor/courses/${courseId}/cover`, formData);
  }

  setPresetCover(courseId: number, imageName: string): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/instructor/courses/${courseId}/cover-preset?imageName=${encodeURIComponent(imageName)}`,
      {}
    );
  }

  /** Uploader une vidéo pour une leçon */
  uploadLessonVideo(lessonId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/video`, formData);
  }

  /** Uploader un PDF pour une leçon */
  uploadLessonPdf(lessonId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/pdf`, formData);
  }

  /** Modifier le titre / accès d’une leçon */
  updateLesson(lessonId: number, data: { title?: string; isFree?: boolean }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}`, data);
  }

  /** Supprimer une leçon entière */
  deleteLesson(lessonId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}`);
  }

  /** Supprimer la vidéo d'une leçon */
  deleteLessonVideo(lessonId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/video`);
  }

  /** Supprimer le PDF d'une leçon */
  deleteLessonPdf(lessonId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/pdf`);
  }

  /** Supprimer l'article d'une leçon */
  deleteLessonArticle(lessonId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/article`);
  }

  /** Récupérer les ressources d'une leçon */
  getLessonResources(lessonId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/resources`);
  }

  /** Ajouter une ressource à une leçon */
  addLessonResource(lessonId: number, data: { title: string; type: string; url: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/instructor/courses/lessons/${lessonId}/resources`, data);
  }

  /** Supprimer une ressource */
  deleteLessonResource(resourceId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/instructor/courses/lessons/resources/${resourceId}`);
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  PANIER (CART) — nécessite rôle STUDENT
  // ═══════════════════════════════════════════════════════════════════════

  /** Mes cours achetés (enrolled) */
  getMyEnrolledCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student/my-courses`);
  }

  /** Inscription gratuite (cours à prix 0) */
  enrollFree(courseId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/enroll-free/${courseId}`, {});
  }

  /** Contenu du panier */
  getCart(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student/cart`);
  }

  /** Nombre d'articles dans le panier */
  getCartCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/student/cart/count`);
  }

  /** Ajouter un cours au panier */
  addToCart(courseId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/cart/${courseId}`, {});
  }

  /** Retirer un cours du panier */
  removeFromCart(courseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/student/cart/${courseId}`, { responseType: 'text' });
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  LISTE DE SOUHAITS (WISHLIST) — nécessite rôle STUDENT
  // ═══════════════════════════════════════════════════════════════════════

  /** Contenu de la wishlist */
  getWishlist(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student/wishlist`);
  }

  /** Ajouter un cours à la wishlist */
  addToWishlist(courseId: number): Observable<string> {
    return this.http.post(`${this.apiUrl}/student/wishlist/${courseId}`, {}, { responseType: 'text' });
  }

  /** Retirer un cours de la wishlist */
  removeFromWishlist(courseId: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/student/wishlist/${courseId}`, { responseType: 'text' });
  }

  /** Vérifier si un cours est dans la wishlist */
  checkWishlist(courseId: number): Observable<{ inWishlist: boolean }> {
    return this.http.get<{ inWishlist: boolean }>(`${this.apiUrl}/student/wishlist/${courseId}/check`);
  }

  /** Déplacer un cours de la wishlist vers le panier */
  moveToCart(courseId: number): Observable<string> {
    return this.http.post(`${this.apiUrl}/student/wishlist/${courseId}/move-to-cart`, {}, { responseType: 'text' });
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  PROGRESSION — nécessite rôle STUDENT
  // ═══════════════════════════════════════════════════════════════════════

  /** Récupérer la progression sur une leçon (watchedSeconds pour reprendre) */
  getLessonProgress(lessonId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/student/progress/lesson/${lessonId}`);
  }

  /** Sauvegarder la progression (toutes les 30s) */
  saveProgress(lessonId: number, watchedSeconds: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/student/progress/lesson/${lessonId}`, { watchedSeconds });
  }

  /** Marquer une leçon comme terminée */
  markLessonCompleted(lessonId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/progress/lesson/${lessonId}/complete`, {});
  }

  /** Démarquer une leçon comme non terminée (toggle) */
  markLessonIncomplete(lessonId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/progress/lesson/${lessonId}/incomplete`, {});
  }

  /** Progression globale sur un cours (pourcentage) */
  getCourseProgress(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/student/progress/course/${courseId}`);
  }

  /** Liste de mes cours avec progression */
  getMyCourseProgress(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student/progress/my-courses`);
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  AVIS / REVIEWS — nécessite rôle STUDENT
  // ═══════════════════════════════════════════════════════════════════════

  /** Récupérer les avis d'un cours (public) */
  getCourseReviews(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/public/courses/${courseId}/reviews`);
  }

  /** Créer ou mettre à jour son avis sur un cours */
  upsertReview(courseId: number, data: { rating: number; comment?: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/courses/${courseId}/reviews`, data);
  }

  /** Supprimer son avis */
  deleteReview(courseId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/student/courses/${courseId}/reviews`);
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  ENDPOINTS ADMIN
  // ═══════════════════════════════════════════════════════════════════════

  /** Liste des cours en attente de validation */
  getPendingCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/courses/pending`);
  }

  /** Détail d'un cours (vue admin) */
  getCourseForAdmin(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/courses/${courseId}`);
  }

  /** Approuver ou rejeter un cours */
  reviewCourse(courseId: number, review: { action: string; rejectionReason?: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/review`, review);
  }

  /** Liste des cours publiés (vue admin) */
  getPublishedCoursesForAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/courses/published`);
  }

  /** Tous les cours toutes statuts (vue admin) */
  getAllCoursesForAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/courses/all`);
  }

  /** Admin: supprimer un cours */
  adminDeleteCourse(courseId: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/admin/courses/${courseId}`, { responseType: 'text' });
  }

  /** Admin: archiver un cours */
  adminArchiveCourse(courseId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/archive`, {});
  }

  /** Admin: désarchiver un cours (ARCHIVED → PUBLISHED) */
  adminUnarchiveCourse(courseId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/unarchive`, {});
  }

  /** Admin: liste des cours archivés */
  getArchivedCoursesForAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/courses/archived`);
  }

  /** Admin: modifier le prix d'un cours */
  adminUpdatePrice(courseId: number, price: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/price`, { price });
  }

  /** Admin: mettre un cours en promotion */
  adminSetPromotion(courseId: number, discountPrice: number, discountEndsAt: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/promotion`, { discountPrice, discountEndsAt });
  }

  /** Admin: modifier le contenu d'un cours (titre, description, niveau, langue...) */
  adminEditCourse(courseId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/edit`, data);
  }

  /** Admin: supprimer un avis */
  adminDeleteReview(reviewId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/admin/courses/reviews/${reviewId}`);
  }

  /** Admin: activer/désactiver le featured d'un cours */
  toggleFeatured(courseId: number, featured: boolean): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/featured`, { featured });
  }

  /** Admin: cours avec modifications en attente */
  getCoursesWithPendingEdits(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/courses/pending-edits`);
  }

  /** Admin: approuver une modification en attente */
  approvePendingEdit(courseId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/approve-edit`, {});
  }

  /** Admin: rejeter une modification en attente */
  rejectPendingEdit(courseId: number, reason: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/courses/${courseId}/reject-edit`, { reason });
  }

  /** Instructor: voir les reviews d'un de ses cours */
  getInstructorCourseReviews(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/instructor/courses/${courseId}/reviews`);
  }

  /** Instructor: liste des étudiants inscrits dans ses cours avec progression */
  getInstructorStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/instructor/courses/students`);
  }

  /** Instructor: tableau de bord revenus (totalRevenue, totalStudents, perCourse, monthly) */
  getInstructorRevenue(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/instructor/revenue`);
  }
  /** Admin: créer une catégorie */
  createCategory(data: { name: string; description?: string; icon?: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/categories`, data);
  }

  /** Admin: modifier une catégorie */
  updateCategory(id: number, data: { name: string; description?: string; icon?: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/categories/${id}`, data);
  }

  /** Admin: supprimer une catégorie */
  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/admin/categories/${id}`, { responseType: 'text' as 'json' });
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  PAIEMENT STRIPE
  // ═══════════════════════════════════════════════════════════════════════

  /** Créer une session de paiement Stripe → retourne l'URL de redirection */
  createCheckoutSession(courseId: number, couponCode?: string): Observable<{ sessionId: string; url: string }> {
    const body: any = { courseId };
    if (couponCode) { body.couponCode = couponCode; }
    return this.http.post<{ sessionId: string; url: string }>(
      `${this.apiUrl}/payment/create-session`,
      body
    );
  }

  /** Vérifier si le student a payé un cours */
  checkPayment(courseId: number): Observable<{ paid: boolean }> {
    return this.http.get<{ paid: boolean }>(`${this.apiUrl}/payment/check/${courseId}`);
  }
}
