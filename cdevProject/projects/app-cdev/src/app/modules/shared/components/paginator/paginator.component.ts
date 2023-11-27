import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'cdev-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() quantityRecords: number;
  @Input() pageSize: number;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();

  changePage(event: PageEvent) {
    this.onChangePage.emit(event.pageIndex);
  }
}
