import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import variables from '../../../../assets/config/enviroment.json';
import { Role } from '../../user/domain/entities/role';
import { RoleRepository } from '../domain/repositories/role.repository';

@Injectable({
  providedIn: 'root',
})
export class RoleInfrastructure implements RoleRepository {
  constructor(private readonly http: HttpClient) {}
  list(): Observable<Role[]> {
    return this.http.get<Role[]>(`${variables.apiUrl}/v1/role`);
  }
}
