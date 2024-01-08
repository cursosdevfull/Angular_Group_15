import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

@Injectable()
export class UserGetAll {
  repository: UserRepository;

  constructor(@Inject(UserInfrastructure) repository: UserRepository) {
    this.repository = repository;
  }

  execute(): Observable<User[]> {
    return this.repository.getAll();
  }
}
