import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  register(email: string, password: string, role: string = 'user'): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      if (userCredential.user) {
        return this.firestore.collection('users').doc(userCredential.user.uid).set({ 
          email, 
          role 
        });
      }
      return Promise.reject(new Error('User credential is null')); // Explicit return
    });
  }
  

  // ✅ Login User
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // ✅ Logout User
  logout() {
    return this.afAuth.signOut();
  }

  // ✅ Get Authenticated User
  getUser() {
    return this.afAuth.authState;
  }

  // ✅ Get User Role (Fix for Admin Guard)
  getUserRole(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.collection('users').doc(user.uid).valueChanges().pipe(
            map((data: any) => data?.role || null)
          );
        } else {
          return of(null);
        }
      })
    );
  }
}
