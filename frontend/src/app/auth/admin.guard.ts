import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getUserRole().pipe(
      map(role => {
        if (role === 'admin') {
          return true; // Allow access
        } else {
          this.router.navigate(['/dashboard']); // Redirect non-admin users
          return false;
        }
      })
    );
  }
}
