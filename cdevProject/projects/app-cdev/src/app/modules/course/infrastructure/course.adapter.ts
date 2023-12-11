import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import variables from '../../../../assets/config/enviroment.json';
import { Pagination } from '../../core/helpers/pagination';
import { Course } from '../domain/course';
import { CoursePort } from '../domain/ports/course.port';

@Injectable()
export class CourseAdapter implements CoursePort {
  constructor(private readonly http: HttpClient) {}

  listByPage(page: number, limit: number): Observable<Pagination<Course>> {
    return this.http.get<Pagination<Course>>(
      `${variables.apiUrl}/v1/course/page/${page + 1}/limit/${limit}`
    );
  }
}
