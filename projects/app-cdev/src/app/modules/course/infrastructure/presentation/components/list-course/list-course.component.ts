import { Component } from '@angular/core';
import { BaseComponent } from 'projects/app-cdev/src/app/modules/core/classes/base-component';
import { takeUntil } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';
import { Metadatas } from '../../../../../shared/components/table/metadata.interface';
import { UtilService } from '../../../../../shared/services/util.service';
import { CourseApplication } from '../../../../application/course.application';
import { Course } from '../../../../domain/course';
import { FormCourseComponent } from '../form-course/form-course.component';

@Component({
  selector: 'cdev-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
})
export class ListCourseComponent extends BaseComponent<Course> {
  metadata: Metadatas = [
    { field: 'title', label: 'Título' },
    {
      field: 'slug',
      label: 'Slug',
    },
  ];

  constructor(
    private readonly layoutService: LayoutService,
    private readonly courseApplication: CourseApplication,
    private readonly utilService: UtilService
  ) {
    super();
    layoutService.configuration = { showMenu: true, showHeader: true };
    this.loadPage(0);
  }

  loadPage(page: number) {
    this.courseApplication.listByPage(page, this.pageSize).subscribe((data) => {
      this.data = data.data;
      this.quantityRecords = data.total;
    });
  }

  changePage(page: number) {
    this.loadPage(page);
  }

  openModal(data?: Course) {
    const reference = this.utilService.showModalWindow(
      FormCourseComponent,
      'modal-course',
      data
    );
    reference
      .afterClosed()
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        if (!data) return;

        if (data.id) {
          const course = new Course(data.id, data.info.title, data.info.slug);
          this.courseApplication
            .update(course)
            .pipe(takeUntil(this.subject))
            .subscribe((data) => {
              this.utilService.showNotify('Successfully updated');
              this.loadPage(0);
            });
        } else {
          const course = new Course(uuidv4(), data.info.title, data.info.slug);
          this.courseApplication
            .insert(course)
            .pipe(takeUntil(this.subject))
            .subscribe((data) => {
              this.utilService.showNotify('Successfully created');
              this.loadPage(0);
            });
        }
      });
  }

  delete(row: any) {
    this.utilService
      .showConfirm('¿Está seguro de eliminar el registro?')
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        if (!data) return;
        this.courseApplication.delete(row.id).subscribe((data) => {
          this.loadPage(0);
        });
      });
  }

  showOptionsToExport() {
    this.courseApplication
      .getAll()
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        this.utilService.showOptionsToExport(
          data,
          this.metadata,
          'courses',
          'List of courses'
        );
      });
  }
}
