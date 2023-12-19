import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

@Injectable()
export class UserDelete {
  repository: UserRepository;

  constructor(@Inject(UserInfrastructure) repository: UserRepository) {
    this.repository = repository;
  }

  execute(id: string): Observable<User> {
    return this.repository.delete(id);
  }
}
