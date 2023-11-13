import { Inject, Injectable } from '@angular/core';

import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

@Injectable()
export class UserCreate {
  repository: UserRepository;

  constructor(@Inject(UserInfrastructure) repository: UserRepository) {
    this.repository = repository;
  }

  execute(user: User): Promise<User> {
    return this.repository.add(user);
  }
}
