import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-2f0cb","appId":"1:321023723862:web:d592d45c8f5b2c6e852ef7","storageBucket":"simple-crm-2f0cb.appspot.com","apiKey":"AIzaSyBfSnUkV3PlG7B6Svtyi8h_BP4oAVGfP1g","authDomain":"simple-crm-2f0cb.firebaseapp.com","messagingSenderId":"321023723862"})), provideFirestore(() => getFirestore())]
};
