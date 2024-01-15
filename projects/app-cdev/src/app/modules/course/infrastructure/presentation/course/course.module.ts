import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '../../../../../config/modules/grid/grid.module';
import { MaterialModule } from '../../../../material/material.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CourseApplication } from '../../../application/course.application';
import { CourseAdapter } from '../../course.adapter';
import { FormCourseComponent } from '../components/form-course/form-course.component';
import { ListCourseComponent } from '../components/list-course/list-course.component';
import { CourseRoutingModule } from './course-routing.module';

const application = [CourseApplication];
const infrastructure = [CourseAdapter];

@NgModule({
  declarations: [ListCourseComponent, FormCourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    GridModule,
    MaterialModule,
    ReactiveFormsModule,
    CourseRoutingModule,
  ],
  providers: [...application, ...infrastructure],
})
export class CourseModule {}
