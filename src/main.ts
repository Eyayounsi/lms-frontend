import 'zone.js';
if (typeof globalThis !== 'undefined' && !(globalThis as any).global) {
  (globalThis as any).global = globalThis;
}
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
