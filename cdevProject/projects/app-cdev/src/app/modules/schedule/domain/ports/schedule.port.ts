import { Observable } from 'rxjs';

import { Pagination } from '../../../core/helpers/pagination';
import { Schedule } from '../schedule';

export interface SchedulePort {
  listByPage(page: number, limit: number): Observable<Pagination<Schedule>>;
}
