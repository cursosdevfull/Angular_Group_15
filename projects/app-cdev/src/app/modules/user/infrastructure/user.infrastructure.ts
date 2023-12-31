import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import variables from '../../../../assets/config/enviroment.json';
import { Pagination } from '../../core/helpers/pagination';
import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';
import { UserDto } from './dtos/user.dto';

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
  constructor(private readonly http: HttpClient) {}

  listByPage(page: number, limit: number): Observable<Pagination<User>> {
    return this.http.get<Pagination<User>>(
      `${variables.apiUrl}/v1/user/page/${page + 1}/limit/${limit}`
    );
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(
      `${variables.apiUrl}/v1/user/${user.properties().id}`,
      user
    );
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(`${variables.apiUrl}/v1/user`, user);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${variables.apiUrl}/v1/user/${id}`);
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
