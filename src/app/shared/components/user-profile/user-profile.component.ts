import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../service/profile/profile.service';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { routes } from '../../service/routes/routes';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  imports: [CommonModule, FormsModule]
})
export class UserProfileComponent implements OnInit {

  public routes = routes;
  activeTab: 'profil' | 'securite' | 'danger' = 'profil';

  profileForm = { fullName: '', email: '', phone: '' };
  successMessage = '';
  errorMessage = '';
  saving = false;
  loading = true;

  // Changer le mot de passe
  pwForm = { oldPassword: '', newPassword: '', confirmPassword: '' };
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
  avatarPreview: string | null = null;
  avatarUploading = false;
  avatarSuccessMessage = '';
  avatarErrorMessage = '';

  userRole = '';

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role') || '';
    this.loading = true;
    this.profileService.getProfile().subscribe({
      next: (data: any) => {
        this.profileForm.fullName = data.fullName || '';
        this.profileForm.email   = data.email   || '';
        this.profileForm.phone   = data.phone   || '';
        this.avatarPath = data.avatarPath || '';
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger le profil. Vérifiez la connexion au serveur.';
        this.loading = false;
      }
    });
  }

  get userInitial(): string {
    return this.profileForm.fullName?.charAt(0)?.toUpperCase() || '?';
  }

  get avatarDisplayUrl(): string {
    if (this.avatarPreview) return this.avatarPreview;
    if (!this.avatarPath) return '';
    return this.authService.resolveAvatarUrl(this.avatarPath) || '';
  }

  get isSuperAdmin(): boolean { return this.userRole === 'SUPERADMIN'; }
  get isAdmin():      boolean { return this.userRole === 'ADMIN'; }

  get roleLabel(): string {
    const map: Record<string, string> = {
      SUPERADMIN: 'Super Administrateur', ADMIN: 'Administrateur',
      INSTRUCTOR: 'Instructeur', STUDENT: 'Étudiant', RECRUITER: 'Recruteur'
    };
    return map[this.userRole] || this.userRole;
  }

  get roleIcon(): string {
    const map: Record<string, string> = {
      SUPERADMIN: 'ti-shield-bolt', ADMIN: 'ti-shield-check',
      INSTRUCTOR: 'ti-chalkboard', STUDENT: 'ti-school', RECRUITER: 'ti-briefcase'
    };
    return map[this.userRole] || 'ti-user';
  }

  get heroBg(): string {
    if (this.isSuperAdmin) return 'linear-gradient(135deg, #020c18 0%, #0a1a2e 25%, #0d3a66 50%, #5625E8 75%, #0DCAF0 100%)';
    if (this.isAdmin)      return 'linear-gradient(135deg, #392C7D 0%, #2D1B6B 55%, #1a0f4a 100%)';
    if (this.userRole === 'RECRUITER') return 'linear-gradient(135deg, #03C95A 0%, #392C7D 55%, #0DCAF0 100%)';
    return 'linear-gradient(135deg, #392C7D 0%, #2D1B6B 55%, #1a0f4a 100%)';
  }

  get accentColor(): string {
    if (this.isSuperAdmin) return '#0DCAF0';
    if (this.isAdmin)      return '#FF4667';
    if (this.userRole === 'INSTRUCTOR') return '#6366f1';
    if (this.userRole === 'STUDENT')    return '#03C95A';
    if (this.userRole === 'RECRUITER')  return '#03C95A';
    return '#392C7D';
  }

  get accentFaint(): string {
    if (this.isSuperAdmin) return 'rgba(13,202,240,.06)';
    if (this.isAdmin)      return 'rgba(255,70,103,.06)';
    if (this.userRole === 'INSTRUCTOR') return 'rgba(99,102,241,.06)';
    if (this.userRole === 'STUDENT')    return 'rgba(3,201,90,.06)';
    if (this.userRole === 'RECRUITER')  return 'rgba(3,201,90,.06)';
    return 'rgba(57,44,125,.06)';
  }

  get accentBorder(): string {
    if (this.isSuperAdmin) return 'rgba(13,202,240,.22)';
    if (this.isAdmin)      return 'rgba(255,70,103,.22)';
    if (this.userRole === 'INSTRUCTOR') return 'rgba(99,102,241,.22)';
    if (this.userRole === 'STUDENT')    return 'rgba(3,201,90,.22)';
    if (this.userRole === 'RECRUITER')  return 'rgba(3,201,90,.22)';
    return 'rgba(57,44,125,.22)';
  }

  get pwHasUpper():  boolean { return /[A-Z]/.test(this.pwForm.newPassword); }
  get pwHasDigit():  boolean { return /[0-9]/.test(this.pwForm.newPassword); }
  get pwHasSymbol(): boolean { return /[^A-Za-z0-9]/.test(this.pwForm.newPassword); }

  get pwStrength(): number {
    const p = this.pwForm.newPassword;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8)  s++;
    if (this.pwHasUpper)  s++;
    if (this.pwHasDigit)  s++;
    if (this.pwHasSymbol) s++;
    return s;
  }

  get pwStrengthLabel(): string {
    return ['', 'Faible', 'Moyen', 'Bien', 'Fort'][this.pwStrength] || '';
  }

  get pwStrengthColor(): string {
    return ['', '#E70D0D', '#FFC107', '#03C95A', '#392C7D'][this.pwStrength] || '';
  }

  get pwMatch(): boolean {
    return !!this.pwForm.confirmPassword && this.pwForm.newPassword === this.pwForm.confirmPassword;
  }

  onUpdateProfile(): void {
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
      email:    this.profileForm.email.trim() || null,
      phone:    this.profileForm.phone?.trim() || null,
    };
    this.profileService.updateProfile(payload).subscribe({
      next: (data: any) => {
        this.saving = false;
        this.successMessage = 'Profil mis à jour avec succès !';
        // Propager le nouveau nom vers tous les composants abonnés (sidebar, header)
        this.authService.setFullName(data.fullName || '');
        if (data.email) localStorage.setItem('email', data.email);
        setTimeout(() => this.successMessage = '', 4000);
      },
      error: (err: any) => {
        this.saving = false;
        // Afficher le premier message de validation spécifique si disponible
        const errors: string[] = err.error?.errors;
        if (errors?.length) {
          this.errorMessage = errors[0];
        } else {
          this.errorMessage = err.error?.message || err.error || 'Erreur lors de la mise à jour.';
        }
      }
    });
  }

  onChangePassword(): void {
    this.pwSuccess = '';
    this.pwError = '';
    if (!this.pwForm.oldPassword) { this.pwError = 'Veuillez saisir votre mot de passe actuel.'; return; }
    if (this.pwForm.newPassword.length < 6) { this.pwError = 'Le nouveau mot de passe doit contenir au moins 6 caractères.'; return; }
    if (this.pwForm.newPassword !== this.pwForm.confirmPassword) { this.pwError = 'Les mots de passe ne correspondent pas.'; return; }
    this.changingPw = true;
    this.profileService.changePassword({ oldPassword: this.pwForm.oldPassword, newPassword: this.pwForm.newPassword }).subscribe({
      next: () => {
        this.changingPw = false;
        this.pwSuccess = 'Mot de passe changé avec succès !';
        this.pwForm = { oldPassword: '', newPassword: '', confirmPassword: '' };
        setTimeout(() => this.pwSuccess = '', 5000);
      },
      error: (err: any) => {
        this.changingPw = false;
        this.pwError = err.error || err.error?.message || 'Mot de passe actuel incorrect.';
      }
    });
  }

  confirmDeleteAccount(): void {
    if (!this.deletePassword.trim()) { this.deleteError = 'Veuillez entrer votre mot de passe.'; return; }
    this.deleting = true;
    this.deleteError = '';
    this.profileService.deleteAccount(this.deletePassword).subscribe({
      next: () => {
        this.authService.logout();
        this.router.navigate([this.routes.login]);
      },
      error: (err: any) => {
        this.deleting = false;
        this.deleteError = err.error || 'Mot de passe incorrect.';
      }
    });
  }

  onAvatarSelected(event: Event): void {
    this.avatarSuccessMessage = '';
    this.avatarErrorMessage = '';

    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      this.avatarErrorMessage = 'Veuillez choisir un fichier image valide (PNG/JPG).';
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.avatarPreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);

    this.avatarUploading = true;
    this.profileService.uploadAvatar(file).subscribe({
      next: (res: any) => {
        this.avatarUploading = false;
        this.avatarPreview = null;
        this.avatarPath = res?.avatarPath || '';
        this.authService.setAvatarPath(this.avatarPath);
        this.avatarSuccessMessage = 'Photo de profil mise a jour avec succes.';
        input.value = '';
      },
      error: (err: any) => {
        this.avatarUploading = false;
        this.avatarPreview = null;
        this.avatarErrorMessage = err?.error?.message || err?.error?.error || 'Impossible de mettre a jour la photo.';
        input.value = '';
      }
    });
  }

  removeAvatar(): void {
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
      error: (err: any) => {
        this.avatarUploading = false;
        this.avatarErrorMessage = err?.error?.message || err?.error?.error || 'Impossible de supprimer la photo.';
      }
    });
  }
}
