import { Observable } from 'rxjs';

import { Pagination } from '../../../core/helpers/pagination';
import { User } from '../roots/user';

export interface UserRepository {
  add(user: User): Promise<User>;
  getAll(): Observable<User[]>;
  listByPage(page: number, limit: number): Observable<Pagination<User>>;
}
