import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent, RouterModule } from '@angular/router';
import { CommonService } from '../../shared/service/common/common.service';
import { routes } from '../../shared/service/routes/routes';
import { FooterComponent } from '../layouts/footer/footer.component';

/** French title mapping for known pages */
const PAGE_TITLES_FR: Record<string, string> = {
  'about-us':       'À propos de nous',
  'contact-us':     'Contactez-nous',
  'faq':            'FAQ',
  'pricing-plan':   'Tarifs',
  'privacy-policy': 'Politique de confidentialité',
  'term-condition': 'Conditions d\'utilisation',
  'notifications':  'Notifications',
  'become-an-expert': 'Devenir formateur',
  'instructor-list': 'Formateurs',
  'instructor-grid': 'Formateurs',
  'instructor-details': 'Détails formateur',
  'coming-soon':    'Bientôt disponible',
  'under-construction': 'En construction',
  'testimonial':    'Témoignages',
};

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
  imports : [CommonModule, RouterModule, FooterComponent]
})
export class PagesComponent  {
  last = '';
  public routes = routes;
  page = '';
  base = '';

  get pageTitleFr(): string {
    return PAGE_TITLES_FR[this.page] ||
      this.page.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  constructor(private common: CommonService) {
      this.common.base.subscribe((res: string) => { this.base = res; });
      this.common.page.subscribe((res: string) => { this.page = res; });
      this.common.last.subscribe((res: string) => { this.last = res; });
    }
}
