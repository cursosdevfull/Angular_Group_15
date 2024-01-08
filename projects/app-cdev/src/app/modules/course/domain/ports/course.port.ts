import { Observable } from 'rxjs';

import { Pagination } from '../../../core/helpers/pagination';
import { Course } from '../course';

export interface CoursePort {
  listByPage(page: number, limit: number): Observable<Pagination<Course>>;
  delete(id: string): Observable<Course>;
  getAll(): Observable<Array<Course>>;
  update(course: Course): Observable<Course>;
  insert(course: Course): Observable<Course>;
}
