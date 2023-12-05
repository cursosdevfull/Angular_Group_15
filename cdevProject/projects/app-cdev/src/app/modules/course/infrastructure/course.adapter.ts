import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pagination } from '../../core/helpers/pagination';
import { StorageAdapter } from '../../core/storage/infrastructure/storage.adapter';
import { Course } from '../domain/course';
import { CoursePort } from '../domain/ports/course.port';

@Injectable()
export class CourseAdapter implements CoursePort {
  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageAdapter
  ) {}

  listByPage(page: number, limit: number): Observable<Pagination<Course>> {
    const token = this.storage.get('accessToken');

    return this.http.get<Pagination<Course>>(
      `https://5eda-38-25-17-118.ngrok-free.app/v1/course/page/${
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
