import { Inject, Injectable } from '@angular/core';

import { UserRepository } from '../domain/repositories/user.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

@Injectable()
export class UserByPage {
  repository: UserRepository;

  constructor(@Inject(UserInfrastructure) repository: UserRepository) {
    this.repository = repository;
  }

  execute(page: number, limit: number) {
    return this.repository.listByPage(page, limit);
  }
}
