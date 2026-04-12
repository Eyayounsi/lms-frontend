import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../../../shared/service/profile/profile.service';

/** Structure d'une adresse stockée en JSON dans le champ `address` du profil. */
interface AddressEntry {
  title: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}

declare var bootstrap: any;

@Component({
  selector: 'app-student-billing-address',
  templateUrl: './student-billing-address.component.html',
  styleUrl: './student-billing-address.component.scss',
  imports: [CommonModule, FormsModule]
})
export class StudentBillingAddressComponent implements OnInit {

  addresses: AddressEntry[] = [];
  loading = false;
  saving = false;

  // Formulaire partagé Add / Edit
  addressForm: AddressEntry = { title: '', street: '', city: '', postalCode: '', country: '', isDefault: false };
  editIndex: number | null = null;
  pendingDeleteIndex: number | null = null;

  successMsg = '';
  errorMsg = '';

  constructor(
    private profileService: ProfileService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.addresses = this.parseAddresses(profile.address);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Impossible de charger le profil.');
      }
    });
  }

  private parseAddresses(raw: string | null): AddressEntry[] {
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      // Champ address simple (non-JSON): on l'affiche comme adresse par défaut
      return raw.trim() ? [{ title: 'Adresse principale', street: raw.trim(), city: '', postalCode: '', country: '', isDefault: true }] : [];
    }
  }

  private serialize(): string {
    return JSON.stringify(this.addresses);
  }

  private persist(): void {
    this.saving = true;
    this.profileService.updateProfile({ address: this.serialize() }).subscribe({
      next: () => {
        this.saving = false;
        this.successMsg = 'Adresses mises à jour.';
        this.toastr.success('Adresse sauvegardée !');
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error || 'Erreur lors de la sauvegarde.';
        this.toastr.error(this.errorMsg);
      }
    });
  }

  // ─── Ouvrir modal d'ajout ────────────────────────────────────────────────
  openAddModal(): void {
    this.editIndex = null;
    this.addressForm = { title: '', street: '', city: '', postalCode: '', country: '', isDefault: this.addresses.length === 0 };
    const el = document.getElementById('add_billing');
    if (el) new bootstrap.Modal(el).show();
  }

  // ─── Ouvrir modal d'édition ──────────────────────────────────────────────
  openEditModal(index: number): void {
    this.editIndex = index;
    this.addressForm = { ...this.addresses[index] };
    const el = document.getElementById('edit_billing');
    if (el) new bootstrap.Modal(el).show();
  }

  // ─── Soumettre ajout ─────────────────────────────────────────────────────
  onAddAddress(): void {
    if (!this.addressForm.title.trim() || !this.addressForm.street.trim()) {
      this.toastr.warning('Titre et adresse sont obligatoires.');
      return;
    }
    const entry: AddressEntry = { ...this.addressForm };
    if (entry.isDefault) this.addresses.forEach(a => a.isDefault = false);
    if (this.addresses.length === 0) entry.isDefault = true;
    this.addresses.push(entry);
    this.persist();
    const el = document.getElementById('add_billing');
    if (el) bootstrap.Modal.getInstance(el)?.hide();
  }

  // ─── Soumettre édition ───────────────────────────────────────────────────
  onEditAddress(): void {
    if (this.editIndex === null) return;
    if (!this.addressForm.title.trim() || !this.addressForm.street.trim()) {
      this.toastr.warning('Titre et adresse sont obligatoires.');
      return;
    }
    if (this.addressForm.isDefault) this.addresses.forEach(a => a.isDefault = false);
    this.addresses[this.editIndex] = { ...this.addressForm };
    if (!this.addresses.some(a => a.isDefault) && this.addresses.length > 0) {
      this.addresses[0].isDefault = true;
    }
    this.persist();
    const el = document.getElementById('edit_billing');
    if (el) bootstrap.Modal.getInstance(el)?.hide();
  }

  // ─── Supprimer ───────────────────────────────────────────────────────────
  openDeleteModal(index: number): void {
    this.pendingDeleteIndex = index;
    const el = document.getElementById('delete_billing_modal');
    if (el) new bootstrap.Modal(el).show();
  }

  confirmDelete(): void {
    if (this.pendingDeleteIndex === null) return;
    this.addresses.splice(this.pendingDeleteIndex, 1);
    if (!this.addresses.some(a => a.isDefault) && this.addresses.length > 0) {
      this.addresses[0].isDefault = true;
    }
    this.pendingDeleteIndex = null;
    this.persist();
    const el = document.getElementById('delete_billing_modal');
    if (el) bootstrap.Modal.getInstance(el)?.hide();
  }
}

