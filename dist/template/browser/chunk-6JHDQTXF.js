import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5DE2SIVI.js";

// src/app/shared/service/quiz/quiz.service.ts
var QuizService = class _QuizService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // ═══════════════════════════════════════════════════════════════════════
  //  INSTRUCTOR
  // ═══════════════════════════════════════════════════════════════════════
  getInstructorQuizzes() {
    return this.http.get(`${this.apiUrl}/instructor/quiz`);
  }
  getQuizzesByCourse(courseId) {
    return this.http.get(`${this.apiUrl}/instructor/quiz/course/${courseId}`);
  }
  getQuizByLesson(lessonId) {
    return this.http.get(`${this.apiUrl}/instructor/quiz/lesson/${lessonId}`);
  }
  createQuiz(data) {
    return this.http.post(`${this.apiUrl}/instructor/quiz`, data);
  }
  updateQuiz(quizId, data) {
    return this.http.put(`${this.apiUrl}/instructor/quiz/${quizId}`, data);
  }
  deleteQuiz(quizId) {
    return this.http.delete(`${this.apiUrl}/instructor/quiz/${quizId}`, { responseType: "text" });
  }
  // Questions
  getQuestions(quizId) {
    return this.http.get(`${this.apiUrl}/instructor/quiz/${quizId}/questions`);
  }
  addQuestion(quizId, data) {
    return this.http.post(`${this.apiUrl}/instructor/quiz/${quizId}/questions`, data);
  }
  updateQuestion(questionId, data) {
    return this.http.put(`${this.apiUrl}/instructor/quiz/questions/${questionId}`, data);
  }
  deleteQuestion(questionId) {
    return this.http.delete(`${this.apiUrl}/instructor/quiz/questions/${questionId}`, { responseType: "text" });
  }
  // Résultats
  getQuizResults(quizId) {
    return this.http.get(`${this.apiUrl}/instructor/quiz/${quizId}/results`);
  }
  getAttemptDetailInstructor(attemptId) {
    return this.http.get(`${this.apiUrl}/instructor/quiz/attempt/${attemptId}`);
  }
  // ═══════════════════════════════════════════════════════════════════════
  //  STUDENT
  // ═══════════════════════════════════════════════════════════════════════
  getStudentQuizzes(courseId) {
    return this.http.get(`${this.apiUrl}/student/quiz/course/${courseId}`);
  }
  getAllStudentQuizzes() {
    return this.http.get(`${this.apiUrl}/student/quiz/all`);
  }
  startQuiz(quizId) {
    return this.http.get(`${this.apiUrl}/student/quiz/${quizId}/start`);
  }
  submitQuiz(quizId, data) {
    return this.http.post(`${this.apiUrl}/student/quiz/${quizId}/submit`, data);
  }
  getAttemptDetailStudent(attemptId) {
    return this.http.get(`${this.apiUrl}/student/quiz/attempt/${attemptId}`);
  }
  static \u0275fac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  QuizService
};
//# sourceMappingURL=chunk-6JHDQTXF.js.map
