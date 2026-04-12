import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/service/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'template';
  public base = '';
  public page = '';
  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        const URL = event.url.split('/');
        this.base = URL[1] ? URL[1].replace('-',' '): '';
        this.page = URL[2] ? URL[2].split('?')[0].replace('-',' '): '';
      }
      if(this.base === 'index'){
        this.page = 'Deals Dashboard'
      }
      if(this.base === 'lead dashboard' || this.base === 'project dashboard'
        ||this.base ==='pipeline' || this.base === 'payments' ||this.base === 'analytics' ||this.base === 'sources'
        ||this.base ==='lost reason' || this.base === 'contact stage' ||this.base === 'industry' ||this.base === 'calls'
        ||this.base ==='manage users' || this.base === 'roles permissions' ||this.base === 'permission' ||this.base === 'delete request'
        ||this.base ==='pages' || this.base === 'roles permissions' ||this.base === 'testimonials' ||this.base === 'faq'
        ||this.base ==='contact messages' || this.base === 'tickets' ||this.base === 'testimonials' ||this.base === 'faq'
        ||this.base ==='login' || this.base === 'forgot password' ||this.base === 'email verification' ||this.base === 'two step verification'
        ||this.base ==='reset password' || this.base === 'coming soon' ||this.base === 'under maintenance' 
        ||this.base ==='layout fullwidth' || this.base === 'layout hoverview' ||this.base === 'layout rtl' 
        ||this.base ==='layout mini' || this.base === 'layout hidden' ||this.base === 'layout dark' 
        ||this.base ==='notifications' 
      ){
        this.page = this.base
      }
      // if (event instanceof NavigationEnd){}
    });
  }

  ngOnInit(): void {
    // Planifier le logout automatique au chargement de l'app (gère les rechargements de page)
    this.authService.scheduleAutoLogout();

    // Garde de sécurité : quand l'onglet redevient visible (après mise en veille,
    // alt-tab longue durée, etc.), setTimeout peut avoir été throttlé par le navigateur.
    // On re-vérifie l'expiry immédiatement pour couvrir ce cas.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        if (this.authService.isTokenExpired()) {
          this.authService.forceLogout();
        }
      }
    });
  }
}
