import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../shared/service/course/course.service';
import Swal from 'sweetalert2';

type CategoryIconPreset = { label: string; iconClass: string; color: string };

const DEFAULT_CATEGORY_ICON = 'fa-solid fa-layer-group';

/**
 * Presets synchronisés avec getCategoryIconClass() de home.component.ts.
 * color = classe CSS admin utilisée uniquement pour la grille de sélection.
 */
const CATEGORY_TEMPLATE_ICON_PRESETS: CategoryIconPreset[] = [
  // ── Technologie & Dev ───────────────────────────────────
  { label: 'Dév. Web',          iconClass: 'fa-solid fa-code',             color: 'cat-p-indigo'  },
  { label: 'Frontend',          iconClass: 'fa-solid fa-display',          color: 'cat-p-indigo'  },
  { label: 'Backend / API',     iconClass: 'fa-solid fa-server',           color: 'cat-p-indigo'  },
  { label: 'DevOps / CI/CD',    iconClass: 'fa-solid fa-infinity',         color: 'cat-p-amber'   },
  { label: 'DevSecOps',         iconClass: 'fa-solid fa-shield-halved',    color: 'cat-p-red'     },
  { label: 'Cyber Sécurité',    iconClass: 'fa-solid fa-shield-halved',    color: 'cat-p-red'     },
  { label: 'Cloud & Infra',     iconClass: 'fa-solid fa-cloud',            color: 'cat-p-sky'     },
  { label: 'Réseaux',           iconClass: 'fa-solid fa-network-wired',    color: 'cat-p-teal'    },
  { label: 'Mobile Apps',       iconClass: 'fa-solid fa-mobile-screen',    color: 'cat-p-teal'    },
  { label: 'Bases de données',  iconClass: 'fa-solid fa-database',         color: 'cat-p-indigo'  },
  { label: 'Blockchain',        iconClass: 'fa-solid fa-cubes',            color: 'cat-p-purple'  },
  { label: 'Architecture',      iconClass: 'fa-solid fa-sitemap',          color: 'cat-p-slate'   },
  { label: 'Tests / QA',        iconClass: 'fa-solid fa-vial-circle-check',color: 'cat-p-slate'   },
  { label: 'Automatisation',    iconClass: 'fa-solid fa-robot',            color: 'cat-p-slate'   },
  { label: 'Systèmes / OS',     iconClass: 'fa-solid fa-microchip',        color: 'cat-p-slate'   },

  // ── IA & Data ────────────────────────────────────────────
  { label: 'IA / Machine Learning', iconClass: 'fa-solid fa-brain',        color: 'cat-p-purple'  },
  { label: 'Data Science',      iconClass: 'fa-solid fa-chart-line',       color: 'cat-p-purple'  },
  { label: 'Data Analytics',    iconClass: 'fa-solid fa-magnifying-glass-chart', color: 'cat-p-purple' },

  // ── Design & Créativité ──────────────────────────────────
  { label: 'UI/UX Design',      iconClass: 'fa-solid fa-pen-ruler',        color: 'cat-p-pink'    },
  { label: 'Design Graphique',  iconClass: 'fa-solid fa-palette',          color: 'cat-p-pink'    },
  { label: 'Illustration',      iconClass: 'fa-solid fa-paintbrush',       color: 'cat-p-pink'    },
  { label: 'Photographie',      iconClass: 'fa-solid fa-camera-retro',     color: 'cat-p-amber'   },
  { label: 'Vidéo / Montage',   iconClass: 'fa-solid fa-film',             color: 'cat-p-amber'   },
  { label: 'Musique / Audio',   iconClass: 'fa-solid fa-music',            color: 'cat-p-amber'   },

  // ── Business & Marketing ─────────────────────────────────
  { label: 'Marketing Digital', iconClass: 'fa-solid fa-chart-line',       color: 'cat-p-emerald' },
  { label: 'E-commerce',        iconClass: 'fa-solid fa-bag-shopping',     color: 'cat-p-emerald' },
  { label: 'Entrepreneuriat',   iconClass: 'fa-solid fa-lightbulb',        color: 'cat-p-emerald' },
  { label: 'Vente / Sales',     iconClass: 'fa-solid fa-handshake',        color: 'cat-p-emerald' },
  { label: 'Gestion de projet', iconClass: 'fa-solid fa-list-check',       color: 'cat-p-emerald' },

  // ── Finance & Droit ──────────────────────────────────────
  { label: 'Finance',           iconClass: 'fa-solid fa-wallet',           color: 'cat-p-yellow'  },
  { label: 'Comptabilité',      iconClass: 'fa-solid fa-receipt',          color: 'cat-p-yellow'  },
  { label: 'Droit / Légal',     iconClass: 'fa-solid fa-scale-balanced',   color: 'cat-p-yellow'  },

  // ── Soft Skills & Perso ──────────────────────────────────
  { label: 'Communication',     iconClass: 'fa-solid fa-language',         color: 'cat-p-blue'    },
  { label: 'Leadership',        iconClass: 'fa-solid fa-people-group',     color: 'cat-p-blue'    },
  { label: 'Soft Skills',       iconClass: 'fa-solid fa-user-gear',        color: 'cat-p-blue'    },
  { label: 'Productivité',      iconClass: 'fa-solid fa-bolt',             color: 'cat-p-blue'    },
  { label: 'Carrière',          iconClass: 'fa-solid fa-briefcase',        color: 'cat-p-blue'    },

  // ── Santé & Éducation ────────────────────────────────────
  { label: 'Santé & Bien-être', iconClass: 'fa-solid fa-heart-pulse',      color: 'cat-p-rose'    },
  { label: 'Éducation',         iconClass: 'fa-solid fa-graduation-cap',   color: 'cat-p-rose'    },
  { label: 'Sport & Fitness',   iconClass: 'fa-solid fa-dumbbell',         color: 'cat-p-rose'    },

  // ── Générique ────────────────────────────────────────────
  { label: 'Général',           iconClass: 'fa-solid fa-layer-group',      color: 'cat-p-slate'   },
  { label: 'Livre / Cours',     iconClass: 'fa-solid fa-book-open',        color: 'cat-p-slate'   },
  { label: 'Certificats',       iconClass: 'fa-solid fa-certificate',      color: 'cat-p-slate'   },
  { label: 'Communauté',        iconClass: 'fa-solid fa-users',            color: 'cat-p-slate'   },
];

const CATEGORY_TEMPLATE_ICON_CLASSES: string[] = Array.from(
  new Set(CATEGORY_TEMPLATE_ICON_PRESETS.map((preset) => preset.iconClass))
);

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {

  categories: any[] = [];
  filteredCategories: any[] = [];
  loading = true;
  searchTerm = '';

  // Formulaire créer / modifier
  showForm = false;
  editId: number | null = null;
  form = { name: '', description: '', icon: '' };
  saving = false;
  readonly CATEGORY_TEMPLATE_ICON_PRESETS = CATEGORY_TEMPLATE_ICON_PRESETS;

  getCategoryColorClass(categoryName?: string): string {
    const name = (categoryName || '').toLowerCase();
    if (name.includes('devsecops') || name.includes('devsec')) return 'cat-p-red';
    if (name.includes('cloud') || name.includes('aws') || name.includes('azure') || name.includes('gcp')) return 'cat-p-sky';
    if (name.includes('cyber') || name.includes('securit')) return 'cat-p-red';
    if (name.includes('devops') || name.includes('cicd') || name.includes(' ops')) return 'cat-p-amber';
    if (name.includes('network') || name.includes('réseau') || name.includes('reseaux')) return 'cat-p-teal';
    if (name.includes('mobile') || name.includes('android') || name.includes('ios') || name.includes('flutter')) return 'cat-p-teal';
    if (name.includes('design') || name.includes('ui') || name.includes('ux') || name.includes('graph')) return 'cat-p-pink';
    if (name.includes('market') || name.includes('business') || name.includes('commerce') || name.includes('sales')) return 'cat-p-emerald';
    if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('code')) return 'cat-p-indigo';
    if (name.includes('data') || name.includes(' ia') || name.includes(' ai') || name.includes('machine') || name.includes('intelligence')) return 'cat-p-purple';
    if (name.includes('photo') || name.includes('video') || name.includes('media')) return 'cat-p-amber';
    if (name.includes('finance') || name.includes('compta')) return 'cat-p-yellow';
    if (name.includes('health') || name.includes('sant')) return 'cat-p-rose';
    if (name.includes('lang') || name.includes('communication')) return 'cat-p-blue';
    return 'cat-p-slate';
  }

  get selectableIconPresets(): CategoryIconPreset[] {
    const currentIcon = this.normalizeIconValue(this.form.icon);
    if (!currentIcon || CATEGORY_TEMPLATE_ICON_CLASSES.includes(currentIcon)) {
      return this.CATEGORY_TEMPLATE_ICON_PRESETS;
    }
    return [{ label: 'Icône actuelle', iconClass: currentIcon, color: 'cat-p-slate' }, ...this.CATEGORY_TEMPLATE_ICON_PRESETS];
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
      next: (data) => { this.categories = data; this.applyFilters(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredCategories = !term
      ? this.categories
      : this.categories.filter(c => c.name?.toLowerCase().includes(term) || c.description?.toLowerCase().includes(term));
  }

  openCreate(): void {
    this.editId = null;
    this.form = { name: '', description: '', icon: DEFAULT_CATEGORY_ICON };
    this.showForm = true;
  }

  openEdit(cat: any): void {
    this.editId = cat.id;
    const iconValue = this.normalizeIconValue(cat.icon);
    this.form = { name: cat.name, description: cat.description || '', icon: iconValue };
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.editId = null;
  }

  save(): void {
    if (!this.form.name.trim()) return;
    this.saving = true;
    const payload = {
      ...this.form,
      icon: this.normalizeIconValue(this.form.icon)
    };
    const obs = this.editId
      ? this.courseService.updateCategory(this.editId, payload)
      : this.courseService.createCategory(payload);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showForm = false;
        this.showToast('success', this.editId ? 'Catégorie mise à jour !' : 'Catégorie créée !');
        this.editId = null;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.showToast('error', e?.error?.message || 'Erreur lors de l\'enregistrement.');
      }
    });
  }

  displayIcon(value?: string): string {
    return this.normalizeIconValue(value);
  }

  selectTemplateIcon(iconClass: string): void {
    this.form.icon = iconClass;
  }

  private normalizeIconValue(value?: string): string {
    if (!value || value.startsWith('preset-img:') || value.startsWith('isax ')) {
      return DEFAULT_CATEGORY_ICON;
    }
    return value;
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
        this.showToast('success', 'Catégorie supprimée.');
        this.load();
      },
      error: (e) => {
        this.deleting = false;
        this.showToast('error', e?.error?.message || 'Erreur lors de la suppression.');
        this.closeDelete();
      }
    });
  }

  private showToast(type: 'success' | 'error', msg: string): void {
    const Toast = Swal.mixin({
      toast: true, position: 'top-end', showConfirmButton: false,
      timer: 3500, timerProgressBar: true
    });
    Toast.fire({ icon: type, title: msg });
  }
}
