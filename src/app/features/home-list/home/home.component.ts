import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../shared/service/data/data.service';
import { CourseService } from '../../../shared/service/course/course.service';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { ProfileService } from '../../../shared/service/profile/profile.service';
import * as AOS from 'aos';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface data {
  active?: boolean;
  class?:string;
}
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, FooterComponent, RouterLink, SlickCarouselModule, FormsModule],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, OnDestroy {
  public routes = routes;
	private readonly newCourseWindowDays = 30;
  isSelected:boolean[]=[false];
	cartSet = new Set<number>();
	activeHeroCardIndex = 0;
	private heroCardIntervalId?: ReturnType<typeof setInterval>;
  searchTerm = '';
  categories: any[] = [];
  selectedCategoryName = 'Sélectionner';
  featuredCourses: any[] = [];
  topInstructors: any[] = [];
  bannerCourses: any[] = [];
	recruiterPartners = [
		{ name: 'ClickUp', logo: 'assets/img/client/client-33.svg' },
		{ name: 'Loom', logo: 'assets/img/client/client-34.svg' },
		{ name: 'Lattice', logo: 'assets/img/client/client-35.svg' },
		{ name: 'Airtable', logo: 'assets/img/client/client-36.svg' },
		{ name: 'Dropbox', logo: 'assets/img/client/client-37.svg' },
		{ name: 'GitLab', logo: 'assets/img/client/client-38.svg' },
		{ name: 'ClickUp', logo: 'assets/img/client/client-33.svg' },
		{ name: 'Loom', logo: 'assets/img/client/client-34.svg' }
	];
	private failedInstructorAvatarKeys = new Set<string>();

	constructor(
		private DataService: DataService,
		public router: Router,
		private courseService: CourseService,
		private authService: AuthService,
		private profileService: ProfileService
	) {}

	get isLoggedIn(): boolean {
		return this.authService.isLoggedIn();
	}

	get canUseWishlist(): boolean {
		return this.isLoggedIn && (localStorage.getItem('role') || '').includes('STUDENT');
	}

  onSubmit(): void {
    const q = this.searchTerm.trim();
    if (q) {
      this.router.navigate(['/courses/course-list-public'], { queryParams: { search: q } });
    } else {
      this.router.navigate(['/courses/course-list-public']);
    }
  }

  selectCategory(catId: number, catName: string): void {
    this.selectedCategoryName = catName;
    this.router.navigate(['/courses/course-list-public'], { queryParams: { categoryId: catId } });
  }
//   config: SwiperOptions = {
//     effect: 'cards',
//     loop: false,
//     grabCursor: true,
//     slidesPerView: 'auto',
//   };
  public bannercard: any[] = [];

  public slideConfig ={
    lazyLoad: 'ondemand',
				infinite: true,
				slidesToShow: 7,
				slidesToScroll: 1,
				autoplay: true,
				speed: 2600,
				autoplaySpeed: 0,
				cssEase: 'linear',
				pauseOnHover: false,
				pauseOnFocus: false,
				pauseOnDotsHover: false,
				arrows: false,
				draggable: false,
				swipe: false,
				touchMove: false,
				responsive: [
					{
						breakpoint: 1400,
						settings: {
						slidesToShow: 6,
						slidesToScroll: 1,
						infinite: true,
						dots: false
						}
					},
					{
						breakpoint: 1200,
						settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
						}
				]
   }
  public topCourseSlider={
    infinite: true,
  autoplay: true,
  speed: 900,
  autoplaySpeed: 1500,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: 'ease-out',
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      infinite: true,
      dots: false
    }
    },
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    }
    },
  ]
  }
public featureCourseSlider2 ={
  dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
				  {
					breakpoint: 1300,
					settings: {
					  slidesToShow: 3,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 992,
					settings: {
					  slidesToShow: 2,
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
public brandSlide={
  dots: false,
				infinite: true,
				speed: 2000,
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				arrows: false,
				responsive: [
				  {
					breakpoint: 1300,
					settings: {
					  slidesToShow: 5,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 992,
					settings: {
					  slidesToShow: 4,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 768,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 1
					}
				  }
				]
}
public instructorSlider={
  infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
					{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: false
					}
					},
					{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
					},
					{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScrol:1
          }
        }
        ]
}
public testimonialSlider={
  infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						infinite: true,
						dots: false
					}
					},
					{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
					},
				]
}
  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
		this.loadCartState();
    this.courseService.getCategories().subscribe({
      next: (cats) => { this.categories = cats; },
      error: () => {}
    });
    this.courseService.getPublishedCourses().subscribe({
      next: (courses) => {
        // Featured courses (up to 8)
        this.featuredCourses = courses.slice(0, 8);
        // Banner courses (up to 3)
        this.bannerCourses = courses.slice(0, 3);
				this.startHeroCardRotation();
        // Top instructors derived from courses
        const map = new Map<number, any>();
        for (const c of courses) {
          if (!c.instructorId) continue;
          if (!map.has(c.instructorId)) {
            map.set(c.instructorId, {
              id: c.instructorId,
              name: c.instructorName || 'Instructeur',
              avatar: c.instructorAvatar,
              totalRating: 0,
              ratingCount: 0
            });
          }
          const inst = map.get(c.instructorId)!;
          if (c.averageRating) { inst.totalRating += c.averageRating; inst.ratingCount++; }
        }
        this.topInstructors = Array.from(map.values()).map(i => ({
          ...i,
          avgRating: i.ratingCount > 0 ? (i.totalRating / i.ratingCount).toFixed(1) : null
        })).slice(0, 8);

				this.refreshTopInstructorProfiles();
      },
      error: () => {}
    });
  }

	ngOnDestroy(): void {
		if (this.heroCardIntervalId) {
			clearInterval(this.heroCardIntervalId);
			this.heroCardIntervalId = undefined;
		}
	}

	private refreshTopInstructorProfiles(): void {
		if (!this.topInstructors.length) return;

		const requests = this.topInstructors.map((inst) => {
			const id = Number(inst?.id || 0);
			if (!Number.isFinite(id) || id <= 0) {
				return of(inst);
			}

			return this.profileService.getInstructorProfile(id).pipe(
				map((profile: any) => ({
					...inst,
					name: profile?.fullName || inst?.name || 'Instructeur',
					avatar: profile?.avatarPath || inst?.avatar || '',
				})),
				catchError(() => of(inst))
			);
		});

		forkJoin(requests).subscribe({
			next: (resolved) => {
				this.topInstructors = resolved;
				const avatarByInstructor = new Map<number, string>();
				for (const inst of resolved) {
					const id = Number(inst?.id || 0);
					if (id > 0 && inst?.avatar) {
						avatarByInstructor.set(id, inst.avatar);
					}
				}

				this.featuredCourses = this.featuredCourses.map((course: any) => {
					if (course?.instructorAvatar) return course;
					const avatar = avatarByInstructor.get(Number(course?.instructorId || 0));
					return avatar ? { ...course, instructorAvatar: avatar } : course;
				});

				this.bannerCourses = this.bannerCourses.map((course: any) => {
					if (course?.instructorAvatar) return course;
					const avatar = avatarByInstructor.get(Number(course?.instructorId || 0));
					return avatar ? { ...course, instructorAvatar: avatar } : course;
				});
			},
			error: () => {
				// Keep initial values from courses if profile refresh fails.
			}
		});
	}
  toggleClass(slide: data) {
    slide.active = !slide.active;
  }
  directPath() {
    this.router.navigate(['/pages/course/course-list']);
  }
  iconSelect(index:number) : void{
		if (!this.canUseWishlist) {
			return;
		}
	this.isSelected[index]=!this.isSelected[index]
  }

	isInCart(courseId: number): boolean {
		return this.cartSet.has(courseId);
	}

	toggleCartFromCard(courseId: number): void {
		if (!this.isLoggedIn) {
			const cart: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
			const exists = cart.some((c: any) => c.id === courseId);
			if (exists) {
				const updated = cart.filter((c: any) => c.id !== courseId);
				localStorage.setItem('guest_cart', JSON.stringify(updated));
				this.cartSet.delete(courseId);
			} else {
				const course = this.featuredCourses.find((c: any) => c.id === courseId)
					|| this.bannerCourses.find((c: any) => c.id === courseId);
				cart.push({
					id: courseId,
					title: course?.title || '',
					coverImage: course?.coverImage || '',
					price: course?.price || 0,
					effectivePrice: course?.effectivePrice || 0,
					instructorName: course?.instructorName || ''
				});
				localStorage.setItem('guest_cart', JSON.stringify(cart));
				this.cartSet.add(courseId);
			}
			return;
		}

		const role = localStorage.getItem('role') || '';
		if (!role.includes('STUDENT')) {
			return;
		}

		if (this.cartSet.has(courseId)) {
			this.courseService.removeFromCart(courseId).subscribe({
				next: () => this.cartSet.delete(courseId),
				error: () => {}
			});
		} else {
			this.courseService.addToCart(courseId).subscribe({
				next: () => this.cartSet.add(courseId),
				error: () => {}
			});
		}
	}

	private loadCartState(): void {
		if (!this.isLoggedIn) {
			const guest: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
			guest.forEach((c: any) => this.cartSet.add(c.id));
			return;
		}

		const role = localStorage.getItem('role') || '';
		if (!role.includes('STUDENT')) {
			return;
		}

		this.courseService.getCart().subscribe({
			next: (items: any[]) => {
				this.cartSet.clear();
				items.forEach((i: any) => this.cartSet.add(i.courseId ?? i.id));
			},
			error: () => {}
		});
	}

	isCategoryImage(icon?: string): boolean {
		return !!icon && icon.startsWith('preset-img:');
	}

	getCategoryIconClass(icon?: string, categoryName?: string): string {
		const name = (categoryName || '').toLowerCase();
		// Specific keywords checked first (most precise → least precise)
		if (name.includes('devsecops') || name.includes('devsec')) return 'fa-solid fa-shield-halved';
		if (name.includes('cloud') || name.includes('aws') || name.includes('azure') || name.includes('gcp')) return 'fa-solid fa-cloud';
		if (name.includes('cyber') || name.includes('securit') || name.includes('secsec') || name === 'security') return 'fa-solid fa-shield-halved';
		if (name.includes('devops') || name.includes('cicd') || name.includes('ci/cd') || name.includes(' ops')) return 'fa-solid fa-infinity';
		if (name.includes('network') || name.includes('réseau') || name.includes('reseaux')) return 'fa-solid fa-network-wired';
		if (name.includes('mobile') || name.includes('android') || name.includes('ios') || name.includes('flutter') || name.includes('react native')) return 'fa-solid fa-mobile-screen';
		if (name.includes('design') || name.includes('ui') || name.includes('ux') || name.includes('graph')) return 'fa-solid fa-pen-ruler';
		if (name.includes('market') || name.includes('business') || name.includes('commerce') || name.includes('sales')) return 'fa-solid fa-chart-line';
		if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('informat') || name.includes('code')) return 'fa-solid fa-code';
		if (name.includes('data') || name.includes(' ia') || name.includes(' ai') || name.includes('machine') || name.includes('intelligence')) return 'fa-solid fa-brain';
		if (name.includes('lang') || name.includes('communication')) return 'fa-solid fa-language';
		if (name.includes('photo') || name.includes('video') || name.includes('media')) return 'fa-solid fa-camera-retro';
		if (name.includes('music') || name.includes('audio')) return 'fa-solid fa-music';
		if (name.includes('finance') || name.includes('compta')) return 'fa-solid fa-wallet';
		if (name.includes('health') || name.includes('sant')) return 'fa-solid fa-heart-pulse';
		if (name.includes('law') || name.includes('droit')) return 'fa-solid fa-scale-balanced';
		if (name.includes('education') || name.includes('teaching') || name.includes('formation')) return 'fa-solid fa-graduation-cap';
		if (!icon || this.isCategoryImage(icon)) return 'fa-solid fa-layer-group';
		return icon.startsWith('fa-') ? icon : 'fa-solid fa-layer-group';
	}

	getCategoryColorClass(categoryName?: string): string {
		const name = (categoryName || '').toLowerCase();
		if (name.includes('devsecops') || name.includes('devsec')) return 'cat-red';
		if (name.includes('cloud') || name.includes('aws') || name.includes('azure') || name.includes('gcp')) return 'cat-sky';
		if (name.includes('cyber') || name.includes('securit') || name.includes('secsec')) return 'cat-red';
		if (name.includes('devops') || name.includes('cicd') || name.includes(' ops')) return 'cat-amber';
		if (name.includes('network') || name.includes('réseau') || name.includes('reseaux')) return 'cat-teal';
		if (name.includes('mobile') || name.includes('android') || name.includes('ios') || name.includes('flutter')) return 'cat-teal';
		if (name.includes('design') || name.includes('ui') || name.includes('ux') || name.includes('graph')) return 'cat-pink';
		if (name.includes('market') || name.includes('business') || name.includes('commerce') || name.includes('sales')) return 'cat-emerald';
		if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('code')) return 'cat-indigo';
		if (name.includes('data') || name.includes(' ia') || name.includes(' ai') || name.includes('machine') || name.includes('intelligence')) return 'cat-purple';
		if (name.includes('photo') || name.includes('video') || name.includes('media')) return 'cat-amber';
		if (name.includes('finance') || name.includes('compta')) return 'cat-yellow';
		if (name.includes('health') || name.includes('sant')) return 'cat-rose';
		if (name.includes('lang') || name.includes('communication')) return 'cat-blue';
		return 'cat-slate';
	}

	startHeroCardRotation(): void {
		if (this.heroCardIntervalId || this.bannerCourses.length <= 1) {
			return;
		}
		this.heroCardIntervalId = setInterval(() => {
			this.activeHeroCardIndex = (this.activeHeroCardIndex + 1) % this.bannerCourses.length;
		}, 2500);
	}

	trackByCourseId(_: number, course: any): number {
		return Number(course?.id || 0);
	}

	trackByCategoryId(_: number, category: any): number {
		return Number(category?.id || 0);
	}

	trackByInstructorId(_: number, instructor: any): number {
		return Number(instructor?.id || 0);
	}

	trackByPartnerName(_: number, partner: { name: string; logo: string }): string {
		return partner.name;
	}

  getImageUrl(path: string): string {
		return resolveCourseImage(path, 'assets/img/course-img/courses-01.jpg');
  }

  getAvatarUrl(path: string): string {
		return resolveAvatarImage(path, 'assets/img/avatar/avatar10.jpg');
  }

	getCourseImage(course: any): string {
		const raw =
			course?.coverImage ||
			course?.thumbnailUrl ||
			course?.coverImageUrl ||
			course?.thumbnail ||
			course?.imageUrl ||
			course?.image ||
			course?.courseImageUrl ||
			course?.courseImage ||
			'';

		return resolveCourseImage(raw, 'assets/img/course-img/courses-01.jpg');
	}

	getCourseInstructorAvatar(course: any): string {
		const raw =
			course?.instructorAvatar ||
			course?.instructorAvatarPath ||
			course?.instructorImage ||
			course?.instructorProfileImage ||
			course?.instructorPhoto ||
			course?.instructor?.avatar ||
			course?.avatarPath ||
			course?.instructor?.avatarPath ||
			'';

		return resolveAvatarImage(raw, 'assets/img/avatar/avatar10.jpg');
	}

	getInstructorAvatarUrl(inst: any): string {
		return resolveAvatarImage(inst?.avatar || '', '');
	}

	hasInstructorAvatar(inst: any): boolean {
		const key = this.getInstructorKey(inst);
		return !!this.getInstructorAvatarUrl(inst) && !this.failedInstructorAvatarKeys.has(key);
	}

	onInstructorAvatarError(inst: any): void {
		this.failedInstructorAvatarKeys.add(this.getInstructorKey(inst));
	}

	onCourseCoverError(event: Event): void {
		const img = event?.target as HTMLImageElement | null;
		if (!img) return;
		const fallback = 'assets/img/course-img/courses-01.jpg';
		if (!img.src.endsWith(fallback)) {
			img.src = fallback;
		}
	}

	onCourseInstructorAvatarError(event: Event, name?: string): void {
		const img = event?.target as HTMLImageElement | null;
		if (!img) return;
		img.src = this.generateInitialAvatar(name || 'F');
	}

	getInstructorInitial(inst: any): string {
		return String(inst?.name || 'F').trim().charAt(0).toUpperCase() || 'F';
	}

	private getInstructorKey(inst: any): string {
		return String(inst?.id || inst?.name || 'unknown-instructor');
	}

	private generateInitialAvatar(name: string): string {
		const initial = String(name || 'F').trim().charAt(0).toUpperCase() || 'F';
		const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs><rect width="80" height="80" rx="40" fill="url(#g)"/><text x="40" y="52" text-anchor="middle" font-size="32" font-family="Arial, sans-serif" font-weight="700" fill="#ffffff">${initial}</text></svg>`;
		return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
	}

  formatPrice(course: any): string {
    const price = +(course.effectivePrice ?? course.price ?? 0);
    return price === 0 ? 'Gratuit' : price.toFixed(2) + ' €';
  }

	hasActivePromotion(course: any): boolean {
		const original = +(course?.price ?? 0);
		const effective = +(course?.effectivePrice ?? original);
		return !!course?.onSale
			&& this.isPromotionStillValid(course)
			&& original > 0
			&& effective < original;
	}

	getPromotionPercent(course: any): number {
		const original = +(course?.price ?? 0);
		const effective = +(course?.effectivePrice ?? original);
		if (original <= 0 || effective >= original) {
			return 0;
		}
		return Math.round(((original - effective) / original) * 100);
	}

	private isPromotionStillValid(course: any): boolean {
		const endsAt = course?.discountEndsAt;
		if (!endsAt) {
			return true;
		}
		const expiresAt = new Date(endsAt).getTime();
		return Number.isFinite(expiresAt) && expiresAt > Date.now();
	}

	isCourseNew(course: any): boolean {
		const publishedRaw =
			course?.publishedAt ??
			course?.published_at ??
			course?.publishedDate ??
			course?.publishedOn ??
			course?.publicationDate ??
			course?.datePublished;

		if (!publishedRaw) {
			return false;
		}

		const publishedTs = new Date(publishedRaw).getTime();
		if (!Number.isFinite(publishedTs)) {
			return false;
		}

		const ageMs = Date.now() - publishedTs;
		if (ageMs < 0) {
			return true;
		}

		const maxAgeMs = this.newCourseWindowDays * 24 * 60 * 60 * 1000;
		return ageMs <= maxAgeMs;
	}

  goToCourseDetail(courseId: number): void {
		const id = Number(courseId || 0);
		if (!Number.isFinite(id) || id <= 0) {
			return;
		}
		this.router.navigate(['/courses/course-details-2'], { queryParams: { courseId: id } });
  }
}
