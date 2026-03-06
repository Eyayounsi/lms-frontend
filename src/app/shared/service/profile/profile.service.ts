import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

/**
 * Service de gestion du profil utilisateur.
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Récupérer le profil depuis le backend
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/profile`);
  }

  // Mettre à jour le profil (tous les champs)
  updateProfile(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/profile`, data);
  }

  // Uploader l'avatar
  uploadAvatar(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/user/avatar`, formData);
  }

  // Profil public d'un instructeur (sans auth)
  getInstructorProfile(instructorId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/public/instructor/${instructorId}`);
  }

  // Changer le mot de passe (exige l'ancien)
  changePassword(data: { oldPassword: string; newPassword: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/change-password`, data, {
      responseType: 'text' as 'json'
    });
  }

  // Supprimer le compte (exige le mot de passe)
  deleteAccount(password: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/account`, {
      params: { password },
      responseType: 'text' as 'json'
    });
  }

  // Activer/désactiver le partage du profil avec les recruteurs
  toggleShareWithRecruiters(share: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/share-profile`, { share }, {
      responseType: 'text' as 'json'
    });
  }
}
