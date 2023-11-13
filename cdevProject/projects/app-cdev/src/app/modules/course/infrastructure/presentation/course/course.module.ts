import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListCourseComponent } from '../components/list-course/list-course.component';

@NgModule({
  declarations: [ListCourseComponent],
  imports: [CommonModule],
  exports: [ListCourseComponent],
})
export class CourseModule {}
