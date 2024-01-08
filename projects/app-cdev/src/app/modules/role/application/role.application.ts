import { Inject, Injectable } from '@angular/core';

import { RoleRepository } from '../domain/repositories/role.repository';
import { RoleInfrastructure } from '../infrastructure/role.infrastructure';

@Injectable({
  providedIn: 'root',
})
export class RoleApplication {
  constructor(
    @Inject(RoleInfrastructure) private readonly repository: RoleRepository
  ) {}

  list() {
    return this.repository.list();
  }
}
