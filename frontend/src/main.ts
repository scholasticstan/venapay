import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(), provideFirebaseApp(() => initializeApp({ projectId: "venapay", appId: "1:111639722446:web:29447a0f0439afd045139f", storageBucket: "venapay.firebasestorage.app", apiKey: "AIzaSyAUeA6cPENEmXEmywCHFhkpUVYUZatHt2w", authDomain: "venapay.firebaseapp.com", messagingSenderId: "111639722446" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
]
});
