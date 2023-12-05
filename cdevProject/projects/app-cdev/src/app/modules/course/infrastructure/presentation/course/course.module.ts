import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from '../../../../shared/shared.module';
import { CourseApplication } from '../../../application/course.application';
import { CourseAdapter } from '../../course.adapter';
import { ListCourseComponent } from '../components/list-course/list-course.component';

const application = [CourseApplication];
const infrastructure = [CourseAdapter];

@NgModule({
  declarations: [ListCourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [ListCourseComponent],
  providers: [...application, ...infrastructure],
})
export class CourseModule {}
