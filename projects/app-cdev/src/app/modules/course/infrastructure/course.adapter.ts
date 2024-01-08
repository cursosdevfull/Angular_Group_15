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

  delete(id: string): Observable<Course> {
    return this.http.delete<Course>(`${variables.apiUrl}/v1/course/${id}`);
  }

  getAll(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(`${variables.apiUrl}/v1/course`);
  }

  update(course: Course): Observable<Course> {
    const { id, ...rest } = course.properties();
    return this.http.put<Course>(`${variables.apiUrl}/v1/course/${id}`, rest);
  }

  insert(course: Course): Observable<Course> {
    return this.http.post<Course>(
      `${variables.apiUrl}/v1/course`,
      course.properties()
    );
  }
}
