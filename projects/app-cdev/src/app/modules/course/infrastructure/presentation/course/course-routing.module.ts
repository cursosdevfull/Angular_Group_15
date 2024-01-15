import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { ListCourseComponent } from '../components/list-course/list-course.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    component: ListCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
