import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from '../../shared/service/data/data.service';
import { AuthService } from '../../shared/service/auth/auth.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { forgotPassword, welcomeLogin } from '../../shared/models/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    imports: [CommonModule,FormsModule,RouterLink,SlickCarouselModule]
})
export class ForgotPasswordComponent {
 public routes = routes;
   public welcomeLogin: welcomeLogin[] = [];
   password: boolean = false;
   
   // Propriétés pour le formulaire
   email: string = '';
   isLoading: boolean = false;
   errorMessage: string = '';
   successMessage: string = '';
  
   togglePassword(): void {
     this.password= !this.password;
   }
   public authSlider ={
     dots: true,
         infinite: false,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         responsive: [
           {
           breakpoint: 1300,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
           },
           {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
           }
         ]
   }
 
   constructor(
     private DataService: DataService,
     private authService: AuthService,
     public router: Router
   ) {
     this.welcomeLogin = this.DataService.welcomeLogin;
   }

   // Méthode appelée lors de la soumission du formulaire
   submitForgotPassword(): void {
     // Réinitialiser les messages
     this.errorMessage = '';
     this.successMessage = '';

     // Validation basique
     if (!this.email || !this.email.trim()) {
       this.errorMessage = 'Veuillez entrer votre adresse email';
       return;
     }

     this.isLoading = true;

     // Appeler le service pour envoyer l'email
     this.authService.forgotPassword({ email: this.email }).subscribe({
       next: (response: any) => {
         console.log('✅ [SUCCESS] Réponse brute:', response);
         console.log('✅ [SUCCESS] Type:', typeof response);
         
         this.isLoading = false;
         
         let message = '';
         
         // Cas 1: Objet JSON avec message
         if (response && typeof response === 'object' && response.message) {
           message = response.message;
           console.log('✅ Format détecté: JSON avec "message"');
         } 
         // Cas 2: Texte brut
         else if (typeof response === 'string' && response.trim()) {
           message = response;
           console.log('✅ Format détecté: Texte brut');
         } 
         // Cas 3: Objet sans message (affiche tout)
         else if (response && typeof response === 'object') {
           message = JSON.stringify(response);
           console.log('✅ Format détecté: Objet JSON (converti)');
         } 
         // Cas 4: Fallback
         else {
           message = 'OTP envoyé à votre email!';
           console.log('✅ Format détecté: Vide (fallback)');
         }
         
         console.log('✅ Message final:', message);
         this.successMessage = message;
         
         // Stocker l'email pour le utiliser dans le composant OTP
         this.authService.setResetEmail(this.email);
         
         // Rediriger vers la page OTP après 1.5 secondes
         setTimeout(() => {
           this.router.navigate([routes.otp]);
         }, 1500);
       },
       error: (error: any) => {
         console.error('❌ [ERROR FULL]:', error);
         console.error('❌ Status:', error.status);
         console.error('❌ Error:', error.error);
         console.error('❌ Message:', error.message);
         
         this.isLoading = false;
         
         // Essayer d'extraire le message d'erreur
         let errorMsg = 'Une erreur est survenue. Veuillez réessayer.';
         
         if (error.error && typeof error.error === 'string') {
           errorMsg = error.error;
         } else if (error.error && error.error.message) {
           errorMsg = error.error.message;
         } else if (error.message) {
           errorMsg = error.message;
         }
         
         this.errorMessage = errorMsg;
       }
     });
   }
 
   directIndex() {
     this.router.navigate([routes.setPassword]);
   }
}