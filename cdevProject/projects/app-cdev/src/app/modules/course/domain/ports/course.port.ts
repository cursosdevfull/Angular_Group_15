import { Observable } from 'rxjs';

import { Pagination } from '../../../core/helpers/pagination';
import { Course } from '../course';

export interface CoursePort {
  listByPage(page: number, limit: number): Observable<Pagination<Course>>;
}
