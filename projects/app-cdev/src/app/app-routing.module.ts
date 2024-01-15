import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './modules/core/guards/authentication.guard';
import { PageLoginComponent } from './modules/core/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/infrastructure/presentation/user.module').then(
        (m) => m.UserModule
      ),
  },
  {
    path: 'course',
    data: { roles: ['STUDENT', 'TEACHER'] },
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import(
        './modules/course/infrastructure/presentation/course/course.module'
      ).then((m) => m.CourseModule),
  },
  {
    path: 'dashboard',
    data: { roles: ['STUDENT', 'ADMIN'] },
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import(
        './modules/dashboard/infrastructure/presentation/dashboard.module'
      ).then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
