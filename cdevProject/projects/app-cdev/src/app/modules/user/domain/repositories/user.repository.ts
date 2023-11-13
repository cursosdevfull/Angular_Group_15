import { Observable } from 'rxjs';

import { User } from '../roots/user';

export interface UserRepository {
  add(user: User): Promise<User>;
  getAll(): Observable<User[]>;
}
