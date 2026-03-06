import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../shared/service/course/course.service';

/** Icônes Isax pré-définies pour les catégories — clicables dans le formulaire */
const ISAX_ICONS: { label: string; cls: string }[] = [
  // Technologie & Dev
  { label: 'Code',            cls: 'isax isax-code' },
  { label: 'Monitor',         cls: 'isax isax-monitor' },
  { label: 'CPU',             cls: 'isax isax-cpu' },
  { label: 'Mobile',          cls: 'isax isax-mobile' },
  { label: 'Wifi',            cls: 'isax isax-wifi' },
  { label: 'Cloud',           cls: 'isax isax-cloud' },
  { label: 'Database',        cls: 'isax isax-data' },
  { label: 'Terminal',        cls: 'isax isax-command' },
  { label: 'Git',             cls: 'isax isax-code-circle' },
  { label: 'Sécurité',        cls: 'isax isax-shield-tick' },
  { label: 'API',             cls: 'isax isax-refresh-circle' },
  { label: 'Serveur',         cls: 'isax isax-grid-2' },
  // Design & Créativité
  { label: 'Design',          cls: 'isax isax-brush' },
  { label: 'Image',           cls: 'isax isax-image' },
  { label: 'Palette',         cls: 'isax isax-color-swatch' },
  { label: 'Crayon',          cls: 'isax isax-edit' },
  { label: 'Forme',           cls: 'isax isax-shapes' },
  { label: 'Vidéo',           cls: 'isax isax-video-play' },
  { label: 'Appareil photo',  cls: 'isax isax-camera' },
  { label: 'Musique',         cls: 'isax isax-music' },
  // Business & Finance
  { label: 'Business',        cls: 'isax isax-briefcase' },
  { label: 'Graphique',       cls: 'isax isax-chart' },
  { label: 'Finance',         cls: 'isax isax-wallet' },
  { label: 'Marketing',       cls: 'isax isax-speaker' },
  { label: 'Globe',           cls: 'isax isax-global' },
  { label: 'Réseau',          cls: 'isax isax-people' },
  { label: 'Bâtiment',        cls: 'isax isax-building' },
  { label: 'Présentation',    cls: 'isax isax-presentation-chart' },
  // Éducation & Science
  { label: 'Livre',           cls: 'isax isax-book' },
  { label: 'Diplôme',         cls: 'isax isax-award' },
  { label: 'Science',         cls: 'isax isax-health' },
  { label: 'Ampoule',         cls: 'isax isax-lamp-on' },
  { label: 'Calculatrice',    cls: 'isax isax-calculator' },
  { label: 'Microscope',      cls: 'isax isax-eye' },
  { label: 'Stylo',           cls: 'isax isax-pen-tool' },
  { label: 'Classe',          cls: 'isax isax-teacher' },
  // Divers
  { label: 'Langue',          cls: 'isax isax-language-circle' },
  { label: 'Sport',           cls: 'isax isax-activity' },
  { label: 'Cuisine',         cls: 'isax isax-coffee' },
  { label: 'Voyages',         cls: 'isax isax-airplane' },
  { label: 'Santé',           cls: 'isax isax-heart' },
  { label: 'Jeux vidéo',      cls: 'isax isax-game' },
  { label: 'Photographie',    cls: 'isax isax-gallery' },
  { label: 'Robotique',       cls: 'isax isax-cpu-setting' },
];

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {

  categories: any[] = [];
  loading = true;
  successMessage = '';
  errorMessage = '';

  // Formulaire créer / modifier
  showForm = false;
  editId: number | null = null;
  form = { name: '', description: '', icon: '' };
  saving = false;

  // Icon picker
  showIconPicker = false;
  iconSearch = '';
  readonly ALL_ICONS = ISAX_ICONS;

  get filteredIcons() {
    const q = this.iconSearch.toLowerCase();
    return q ? this.ALL_ICONS.filter(i => i.label.toLowerCase().includes(q) || i.cls.includes(q))
             : this.ALL_ICONS;
  }

  selectIcon(cls: string): void {
    this.form.icon = cls;
    this.showIconPicker = false;
    this.iconSearch = '';
  }

  // Confirmation suppression
  showDeleteModal = false;
  categoryToDelete: any = null;
  deleting = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.courseService.getCategories().subscribe({
      next: (data) => { this.categories = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openCreate(): void {
    this.editId = null;
    this.form = { name: '', description: '', icon: '' };
    this.showForm = true;
    this.showIconPicker = false;
    this.iconSearch = '';
  }

  openEdit(cat: any): void {
    this.editId = cat.id;
    this.form = { name: cat.name, description: cat.description || '', icon: cat.icon || '' };
    this.showForm = true;
    this.showIconPicker = false;
    this.iconSearch = '';
  }

  cancelForm(): void {
    this.showForm = false;
    this.editId = null;
    this.showIconPicker = false;
  }

  save(): void {
    if (!this.form.name.trim()) return;
    this.saving = true;
    const obs = this.editId
      ? this.courseService.updateCategory(this.editId, this.form)
      : this.courseService.createCategory(this.form);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showForm = false;
        this.showSuccess(this.editId ? 'Catégorie mise à jour !' : 'Catégorie créée !');
        this.editId = null;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.errorMessage = e?.error?.message || 'Erreur lors de l\'enregistrement.';
      }
    });
  }

  openDelete(cat: any): void {
    this.categoryToDelete = cat;
    this.showDeleteModal = true;
  }

  closeDelete(): void {
    this.showDeleteModal = false;
    this.categoryToDelete = null;
  }

  confirmDelete(): void {
    if (!this.categoryToDelete) return;
    this.deleting = true;
    this.courseService.deleteCategory(this.categoryToDelete.id).subscribe({
      next: () => {
        this.deleting = false;
        this.closeDelete();
        this.showSuccess('Catégorie supprimée.');
        this.load();
      },
      error: (e) => {
        this.deleting = false;
        this.errorMessage = e?.error?.message || 'Erreur lors de la suppression.';
        this.closeDelete();
      }
    });
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    setTimeout(() => (this.successMessage = ''), 3000);
  }
}
