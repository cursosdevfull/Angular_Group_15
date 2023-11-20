import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { ListCourseComponent } from '../components/list-course/list-course.component';

@NgModule({
  declarations: [ListCourseComponent],
  imports: [CommonModule, SharedModule],
  exports: [ListCourseComponent],
})
export class CourseModule {}
