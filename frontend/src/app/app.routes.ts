import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard'; // ✅ Import Auth Guard
import { AdminGuard } from './auth/admin.guard'; // ✅ Import Admin Guard

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard] // ✅ Protect dashboard
  },

  { 
    path: 'payments', 
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule),
    canActivate: [AuthGuard] // ✅ Protect payments
  },

  { 
    path: 'invoices', 
    loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule),
    canActivate: [AuthGuard] // ✅ Protect invoices
  },

  { 
    path: 'transactions', 
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
    canActivate: [AuthGuard] // ✅ Protect transactions
  },

  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, AdminGuard] // ✅ Only admins can access
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
