import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent {
  form = { name: '', email: '', phone: '', subject: '', message: '' };
  sent = false;
  sending = false;

  sendMessage(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending = true;
    // Simule l'envoi (connecter au backend si besoin)
    setTimeout(() => { this.sending = false; this.sent = true; }, 1200);
  }
}
