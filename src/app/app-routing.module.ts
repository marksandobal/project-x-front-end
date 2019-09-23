import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './dashboard/users/users.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component'
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NeedAuthGuard } from './public/guards/NeedAuthGuard';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'user-details/new',
    component: UserDetailsComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
