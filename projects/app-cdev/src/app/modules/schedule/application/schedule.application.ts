import { Inject, Injectable } from '@angular/core';

import { SchedulePort } from '../domain/ports/schedule.port';
import { ScheduleAdapter } from '../infrastructure/schedule.adapter';

@Injectable()
export class ScheduleApplication {
  constructor(
    @Inject(ScheduleAdapter) private readonly schedulePort: SchedulePort
  ) {}

  listByPage(page: number, limit: number) {
    return this.schedulePort.listByPage(page, limit);
  }
}
