import { Observable } from 'rxjs';

import { Pagination } from '../../../core/helpers/pagination';
import { User } from '../roots/user';

export interface UserRepository {
  add(user: User): Observable<User>;
  getAll(): Observable<User[]>;
  listByPage(page: number, limit: number): Observable<Pagination<User>>;
  update(user: User): Observable<User>;
  delete(id: string): Observable<User>;
}
