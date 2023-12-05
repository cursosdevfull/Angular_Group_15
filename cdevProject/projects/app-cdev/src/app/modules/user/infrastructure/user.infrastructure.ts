import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Pagination } from '../../core/helpers/pagination';
import { StorageAdapter } from '../../core/storage/infrastructure/storage.adapter';
import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';
import { UserDto } from './dtos/user.dto';
import { UserMock } from './mocks/user.mock';

export interface Welcome5 {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

@Injectable()
export class UserInfrastructure implements UserRepository {
  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageAdapter
  ) {}

  listByPage(page: number, limit: number): Observable<Pagination<User>> {
    const token = this.storage.get('accessToken');

    return this.http.get<Pagination<User>>(
      `https://5eda-38-25-17-118.ngrok-free.app/v1/user/page/${
        page + 1
      }/limit/${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  async add(user: User): Promise<User> {
    // await this.validateUser(user);
    return UserMock.add(user);
  }

  getAll(): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users: any[]) => {
          return UserDto.fromDataToDomain(users);
        })
      );
  }

  validateUser(user: User): Promise<boolean> {
    return Promise.resolve(true);
  }
}
