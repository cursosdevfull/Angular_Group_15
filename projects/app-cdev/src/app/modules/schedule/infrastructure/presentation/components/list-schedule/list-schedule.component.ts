import { Component } from '@angular/core';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';
import { Metadatas } from '../../../../../shared/components/table/metadata.interface';
import { ScheduleApplication } from '../../../../application/schedule.application';
import { Schedule } from '../../../../domain/schedule';

@Component({
  selector: 'cdev-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.css'],
})
export class ListScheduleComponent {
  data: Array<Schedule> = [];

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
    private readonly scheduleApplication: ScheduleApplication
  ) {
    layoutService.configuration = { showMenu: true, showHeader: true };
    this.loadPage(0);
  }

  loadPage(page: number) {
    this.scheduleApplication
      .listByPage(page, this.pageSize)
      .subscribe((data) => {
        this.data = data.data;
        this.quantityRecords = data.total;
      });
  }

  changePage(page: number) {
    this.loadPage(page);
  }
}
