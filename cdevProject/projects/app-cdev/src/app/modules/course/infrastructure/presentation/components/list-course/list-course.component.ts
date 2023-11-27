import { Component } from '@angular/core';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';
import { Metadatas } from '../../../../../shared/components/table/metadata.interface';

@Component({
  selector: 'cdev-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
})
export class ListCourseComponent {
  dataOriginal = [
    { id: 1, course: 'Angular', duration: 40, price: 523.55 },
    { id: 2, course: 'React', duration: 40, price: 523.55 },
    { id: 3, course: 'Vue', duration: 40, price: 523.55 },
    { id: 4, course: 'Node', duration: 40, price: 523.55 },
    { id: 5, course: 'Mongo', duration: 40, price: 523.55 },
    { id: 6, course: 'Express', duration: 40, price: 523.55 },
    { id: 7, course: 'Nest', duration: 40, price: 523.55 },
    { id: 8, course: 'Angular', duration: 40, price: 523.55 },
    { id: 9, course: 'React', duration: 40, price: 523.55 },
    { id: 10, course: 'Vue', duration: 40, price: 523.55 },
    { id: 11, course: 'Node', duration: 40, price: 523.55 },
    { id: 12, course: 'Mongo', duration: 40, price: 523.55 },
    { id: 13, course: 'Express', duration: 40, price: 523.55 },
    { id: 14, course: 'Nest', duration: 40, price: 523.55 },
    { id: 15, course: 'Angular', duration: 40, price: 523.55 },
    { id: 16, course: 'React', duration: 40, price: 523.55 },
    { id: 17, course: 'Vue', duration: 40, price: 523.55 },
    { id: 18, course: 'Node', duration: 40, price: 523.55 },
    { id: 19, course: 'Mongo', duration: 40, price: 523.55 },
    { id: 20, course: 'Express', duration: 40, price: 523.55 },
    { id: 21, course: 'Nest', duration: 40, price: 523.55 },
  ];

  data = [];

  metadata: Metadatas = [
    { field: 'id', label: 'ID' },
    { field: 'course', label: 'Curso' },
    {
      field: 'price',
      label: 'Precio',
      transform: { name: 'currency', parameter: 'PEN' },
    },
    //{ field: 'duration', label: 'Duración' },
  ];

  quantityRecords = this.dataOriginal.length;

  pageSize = 10;

  constructor(private readonly layoutService: LayoutService) {
    layoutService.configuration = { showMenu: true, showHeader: true };
    this.loadPage(0);
    // this.layoutService.showMenu = true;
    // this.layoutService.showHeader = true;
    // console.log('ListCourseComponent constructor');
    // console.log('ListCourseComponent layoutService: ', layoutService);
  }

  loadPage(page: number) {
    const start = page * this.pageSize;
    const end = start + this.pageSize;
    this.data = this.dataOriginal.slice(start, end);
  }

  changePage(page: number) {
    this.loadPage(page);
  }
}
