import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pagination } from '../../core/helpers/pagination';
import { StorageAdapter } from '../../core/storage/infrastructure/storage.adapter';
import { SchedulePort } from '../domain/ports/schedule.port';
import { Schedule } from '../domain/schedule';

@Injectable()
export class ScheduleAdapter implements SchedulePort {
  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageAdapter
  ) {}

  listByPage(page: number, limit: number): Observable<Pagination<Schedule>> {
    const token = this.storage.get('accessToken');

    return this.http.get<Pagination<Schedule>>(
      `https://5eda-38-25-17-118.ngrok-free.app/v1/schedule/page/${
        page + 1
      }/limit/${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
