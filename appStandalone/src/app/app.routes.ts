import { inject } from '@angular/core';
import { Routes } from '@angular/router';

import { CourseComponent } from './core/components/course/course.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { authenticationGuard } from './core/guards/authentication.guard';
import { AuthService } from './core/services/auth.service';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'course',
    data: { roles: ['ADMIN'] },
    canActivate: [() => inject(AuthService).isLogged, authenticationGuard],
    component: CourseComponent,
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./core/components/user/user.component').then(
        (m) => m.UserComponent
      ),
  },
];
