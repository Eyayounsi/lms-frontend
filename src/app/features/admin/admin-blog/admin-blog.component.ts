import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminBlogService, BlogPostDto } from '../services/admin-blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {
  posts: BlogPostDto[] = [];
  filteredPosts: BlogPostDto[] = [];
  loading = true;

  searchTerm = '';
  filterStatus = '';

  showForm = false;
  editId: number | null = null;
  saving = false;
  uploadingImage = false;
  form: BlogPostDto = { title: '', summary: '', content: '', coverImage: '' };

  showDeleteModal = false;
  postToDelete: BlogPostDto | null = null;
  deleting = false;

  constructor(private blogService: AdminBlogService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.blogService.getAll().subscribe({
      next: data => { this.posts = data; this.applyFilters(); this.loading = false; },
      error: () => { this.showToast('error', 'Erreur de chargement.'); this.loading = false; }
    });
  }

  applyFilters(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredPosts = this.posts.filter(p => {
      const matchSearch = !term || (p.title?.toLowerCase().includes(term)) || (p.authorName?.toLowerCase().includes(term));
      const matchStatus = !this.filterStatus || p.status === this.filterStatus;
      return matchSearch && matchStatus;
    });
  }

  get publishedCount(): number { return this.posts.filter(p => p.status === 'PUBLISHED').length; }
  get draftCount(): number     { return this.posts.filter(p => p.status !== 'PUBLISHED').length; }

  openCreate(): void {
    this.editId = null;
    this.form = { title: '', summary: '', content: '', coverImage: '' };
    this.showForm = true;
  }

  openEdit(post: BlogPostDto): void {
    this.editId = post.id!;
    this.form = { title: post.title, summary: post.summary || '', content: post.content || '', coverImage: post.coverImage || '' };
    this.showForm = true;
  }

  cancelForm(): void { this.showForm = false; }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    this.uploadingImage = true;
    this.blogService.uploadImage(file).subscribe({
      next: (res) => { this.form.coverImage = res.url; this.uploadingImage = false; },
      error: () => { this.showToast('error', "Erreur lors de l'upload de l'image."); this.uploadingImage = false; }
    });
  }

  save(): void {
    if (!this.form.title.trim()) { this.showToast('error', 'Le titre est obligatoire.'); return; }
    this.saving = true;
    const obs = this.editId
      ? this.blogService.update(this.editId, this.form)
      : this.blogService.create(this.form);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showForm = false;
        this.showToast('success', this.editId ? 'Article modifié.' : 'Article créé.');
        this.load();
      },
      error: () => { this.saving = false; this.showToast('error', 'Erreur lors de la sauvegarde.'); }
    });
  }

  toggle(post: BlogPostDto): void {
    this.blogService.toggle(post.id!).subscribe({
      next: updated => {
        post.status = updated.status;
        this.applyFilters();
        this.showToast('success', updated.status === 'PUBLISHED' ? 'Article publié.' : 'Article dépublié.');
      },
      error: () => { this.showToast('error', 'Erreur de changement de statut.'); }
    });
  }

  openDelete(post: BlogPostDto): void { this.postToDelete = post; this.showDeleteModal = true; }
  cancelDelete(): void { this.showDeleteModal = false; this.postToDelete = null; }

  confirmDelete(): void {
    if (!this.postToDelete) return;
    this.deleting = true;
    this.blogService.delete(this.postToDelete.id!).subscribe({
      next: () => {
        this.deleting = false;
        this.showDeleteModal = false;
        this.postToDelete = null;
        this.showToast('success', 'Article supprimé.');
        this.load();
      },
      error: () => { this.deleting = false; this.showToast('error', 'Erreur de suppression.'); }
    });
  }

  private showToast(type: 'success' | 'error', msg: string): void {
    const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3500, timerProgressBar: true });
    Toast.fire({ icon: type, title: msg });
  }
}
