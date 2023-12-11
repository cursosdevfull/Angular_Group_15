import { Observable } from 'rxjs';

import { Role } from '../../../user/domain/entities/role';

export interface RoleRepository {
  list(): Observable<Role[]>;
}
