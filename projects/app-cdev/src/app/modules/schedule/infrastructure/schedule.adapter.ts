import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import variables from '../../../../assets/config/enviroment.json';
import { Pagination } from '../../core/helpers/pagination';
import { SchedulePort } from '../domain/ports/schedule.port';
import { Schedule } from '../domain/schedule';

@Injectable()
export class ScheduleAdapter implements SchedulePort {
  constructor(private readonly http: HttpClient) {}

  listByPage(page: number, limit: number): Observable<Pagination<Schedule>> {
    return this.http.get<Pagination<Schedule>>(
      `${variables.apiUrl}/v1/schedule/page/${page + 1}/limit/${limit}`
    );
  }
}
