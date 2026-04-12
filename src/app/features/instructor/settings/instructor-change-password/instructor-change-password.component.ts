import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../../../shared/service/profile/profile.service';
import { AuthService } from '../../../../shared/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-instructor-change-password',
    templateUrl: './instructor-change-password.component.html',
    styleUrl: './instructor-change-password.component.scss',
    imports:[CommonModule,FormsModule]
})
export class InstructorChangePasswordComponent {
  public routes = routes
  password: boolean[] = [false, false, false];

  oldPassword = '';
  newPassword = '';
  confirmPassword = '';
  successMessage = '';
  errorMessage = '';
  deletePassword = '';
  deleteError = '';
  deleting = false;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  onChangePassword(): void {
    this.successMessage = '';
    this.errorMessage = '';
    if (!this.oldPassword || !this.newPassword) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }
    this.profileService.changePassword({ oldPassword: this.oldPassword, newPassword: this.newPassword }).subscribe({
      next: () => {
        this.successMessage = 'Mot de passe modifie avec succes.';
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.resetStrength();
      },
      error: (err) => {
        this.errorMessage = err.error || 'Erreur lors du changement du mot de passe.';
      }
    });
  }
 
  togglePassword(index: number): void {
    this.password[index] = !this.password[index];
  }
  passwordValue: string = '';
  strengthLevel: string = '';
  passwordInfoMessage: string | null = null;
  passwordInfoColor: string = '';

  private poorRegExp = /[a-z]/;
  private weakRegExp = /(?=.*?[0-9])/;
  private strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  private whitespaceRegExp = /^$|\s+/;

  checkPasswordStrength(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const password = inputElement.value;
    this.passwordValue = password;
  
    const passwordLength = password.length;
    const hasPoor = this.poorRegExp.test(password);
    const hasWeak = this.weakRegExp.test(password);
    const hasStrong = this.strongRegExp.test(password);
    const hasWhitespace = this.whitespaceRegExp.test(password);
  
    if (password === '') {
      this.resetStrength();
      return;
    }
  
    if (hasWhitespace) {
      this.passwordInfoMessage = 'Les espaces ne sont pas autorises.';
      this.passwordInfoColor = 'red';
      this.strengthLevel = '';
      return;
    }
  
    if (passwordLength < 8) {
      this.strengthLevel = 'poor';
      this.passwordInfoMessage = 'Faible. Le mot de passe doit contenir au moins 8 caracteres.';
      this.passwordInfoColor = 'red';
    } else if (hasPoor || hasWeak || hasStrong) {
      this.strengthLevel = 'weak';
      this.passwordInfoMessage = 'Moyen. Ajoutez des lettres, des chiffres ou des caracteres speciaux.';
      this.passwordInfoColor = '#FFB54A';
    }
  
    if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
      this.strengthLevel = 'strong';
      this.passwordInfoMessage = 'Fort. Ajoutez un caractere special pour renforcer encore le mot de passe.';
      this.passwordInfoColor = '#1D9CFD';
    }
  
    if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
      this.strengthLevel = 'heavy';
      this.passwordInfoMessage = 'Excellent ! Vous avez un mot de passe securise.';
      this.passwordInfoColor = '#159F46';
    }
  }
  

  private resetStrength(): void {
    this.strengthLevel = '';
    this.passwordInfoMessage = null;
  }

  onDeleteAccount(): void {
    this.deleteError = '';

    if (!this.deletePassword.trim()) {
      this.deleteError = 'Veuillez entrer votre mot de passe pour confirmer.';
      return;
    }

    this.deleting = true;
    this.profileService.deleteAccount(this.deletePassword).subscribe({
      next: () => {
        this.deleting = false;
        alert('Votre compte a ete supprime definitivement.');
        this.authService.logout();
      },
      error: (err: any) => {
        this.deleting = false;
        this.deleteError = err.error || 'Mot de passe incorrect. Suppression refusée.';
      }
    });
  }

  goToProfileSettings(): void {
    this.router.navigate([this.routes.instructorSettings]);
  }
}
