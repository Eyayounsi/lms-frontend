import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../../../shared/service/profile/profile.service';

@Component({
    selector: 'app-student-change-password',
    templateUrl: './student-change-password.component.html',
    styleUrl: './student-change-password.component.scss',
    imports : [RouterModule,FormsModule,CommonModule]
})
export class StudentChangePasswordComponent {
  public routes = routes
  password: boolean[] = [false, false, false];

  oldPassword = '';
  newPassword = '';
  confirmPassword = '';
  successMessage = '';
  errorMessage = '';
  currentEmail = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (profile) => { this.currentEmail = profile.email || ''; },
      error: () => {}
    });
  }

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
        this.successMessage = 'Mot de passe modifié avec succès.';
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.resetStrength();
      },
      error: (err) => {
        this.errorMessage = err.error || 'Erreur lors du changement de mot de passe.';
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
       this.passwordInfoMessage = 'Whitespaces are not allowed';
       this.passwordInfoColor = 'red';
       this.strengthLevel = '';
       return;
     }
   
     if (passwordLength < 8) {
       this.strengthLevel = 'poor';
       this.passwordInfoMessage = 'Weak. Must contain at least 8 characters.';
       this.passwordInfoColor = 'red';
     } else if (hasPoor || hasWeak || hasStrong) {
       this.strengthLevel = 'weak';
       this.passwordInfoMessage = 'Average. Must contain at least 1 letter or number.';
       this.passwordInfoColor = '#FFB54A';
     }
   
     if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
       this.strengthLevel = 'strong';
       this.passwordInfoMessage = 'Almost strong. Must contain a special symbol.';
       this.passwordInfoColor = '#1D9CFD';
     }
   
     if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
       this.strengthLevel = 'heavy';
       this.passwordInfoMessage = 'Awesome! You have a secure password.';
       this.passwordInfoColor = '#159F46';
     }
   }
   
 
   private resetStrength(): void {
     this.strengthLevel = '';
     this.passwordInfoMessage = null;
   }
}
