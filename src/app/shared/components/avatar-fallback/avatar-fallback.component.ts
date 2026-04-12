import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar-fallback',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (imageUrl) {
      <img [src]="imageUrl" 
           [alt]="name"
           class="avatar-image"
           (error)="onImageError()">
    } @else {
      <div [class]="'avatar-fallback ' + sizeClass"
           [style.background]="backgroundGradient"
           [style.width.px]="sizePixels"
           [style.height.px]="sizePixels">
        {{ getInitial(name) }}
      </div>
    }
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    .avatar-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }

    .avatar-fallback {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: #fff;
      flex-shrink: 0;
      font-family: inherit;
    }

    .avatar-fallback.sm {
      font-size: 12px;
    }

    .avatar-fallback.md {
      font-size: 16px;
    }

    .avatar-fallback.lg {
      font-size: 20px;
    }

    .avatar-fallback.xl {
      font-size: 28px;
    }
  `]
})
export class AvatarFallbackComponent {
  @Input() imageUrl: string | null | undefined = null;
  @Input() name: string = 'User';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  private readonly sizeMap: { [key: string]: number } = {
    sm: 32,
    md: 48,
    lg: 120,
    xl: 160
  };

  // Gradient violet comme dans le header
  backgroundGradient = 'linear-gradient(135deg, #6366f1, #8b5cf6)';

  get sizePixels(): number {
    return this.sizeMap[this.size] || this.sizeMap['md'];
  }

  get sizeClass(): string {
    return this.size;
  }

  getInitial(name: string): string {
    return (name && name.length > 0) ? name.charAt(0).toUpperCase() : '?';
  }

  onImageError(): void {
    this.imageUrl = null;
  }
}
