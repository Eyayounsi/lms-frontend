import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { register as registerSwiper } from 'swiper/element';
import { withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/service/auth/auth.interceptor';
import { blockedInterceptor } from './shared/service/auth/blocked.interceptor';
import { provideToastr } from 'ngx-toastr';

registerSwiper();
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    BsDatepickerModule.forRoot().providers!,
    provideAnimations(),
    //provideHttpClient(),
    provideHttpClient(withInterceptors([authInterceptor, blockedInterceptor])),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],

};
