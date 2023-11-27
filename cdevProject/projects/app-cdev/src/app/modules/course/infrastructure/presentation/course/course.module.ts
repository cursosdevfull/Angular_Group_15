import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from '../../../../shared/shared.module';
import { ListCourseComponent } from '../components/list-course/list-course.component';

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
})
export class CourseModule {}
