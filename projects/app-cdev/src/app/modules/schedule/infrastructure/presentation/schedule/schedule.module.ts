import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from '../../../../shared/shared.module';
import { ScheduleApplication } from '../../../application/schedule.application';
import { ScheduleAdapter } from '../../schedule.adapter';
import { ListScheduleComponent } from '../components/list-schedule/list-schedule.component';

const application = [ScheduleApplication];
const infrastructure = [ScheduleAdapter];

@NgModule({
  declarations: [ListScheduleComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [ListScheduleComponent],
  providers: [...application, ...infrastructure],
})
export class ScheduleModule {}
