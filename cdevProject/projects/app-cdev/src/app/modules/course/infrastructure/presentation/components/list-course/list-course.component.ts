import { Component } from '@angular/core';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';
import { Metadatas } from '../../../../../shared/components/table/metadata.interface';
import { CourseApplication } from '../../../../application/course.application';
import { Course } from '../../../../domain/course';

@Component({
  selector: 'cdev-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
})
export class ListCourseComponent {
  data: Array<Course> = [];

  metadata: Metadatas = [
    { field: 'title', label: 'Título' },
    {
      field: 'slug',
      label: 'Slug',
    },
    //{ field: 'duration', label: 'Duración' },
  ];

  quantityRecords = 0;

  pageSize = 30;

  constructor(
    private readonly layoutService: LayoutService,
    private readonly courseApplication: CourseApplication
  ) {
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
}
