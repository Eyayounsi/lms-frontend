import 'zone.js';
if (typeof globalThis !== 'undefined' && !(globalThis as any).global) {
  (globalThis as any).global = globalThis;
}
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Expose API base URL for standalone utils (course-image.util, avatar-image.util)
(window as any).__LMS_API_URL__ = environment.apiUrl;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
