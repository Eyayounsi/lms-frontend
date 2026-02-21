import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

/**
 * Service de gestion du profil utilisateur.
 *
 * L'intercepteur Auth (auth.interceptor.ts) ajoute automatiquement
 * le header "Authorization: Bearer <token>" à CHAQUE requête HTTP.
 * Ces endpoints /api/user/** sont donc automatiquement sécurisés.
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

  // Mettre à jour nom, téléphone, email
  updateProfile(data: { fullName?: string; email?: string; phone?: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/profile`, data);
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
}
