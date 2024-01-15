import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { jwtDecode } from 'jwt-decode';

import { AuthApplication } from '../auth/application/auth.application';
import { StorageApplication } from '../storage/application/storage.application';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard
  implements CanLoad, CanActivate, CanActivateChild
{
  rolesUser: string[] = [];

  constructor(
    private readonly storage: StorageApplication,
    private readonly auth: AuthApplication
  ) {
    const accessToken = this.storage.get('accessToken') ?? '';
    const payload: { [k: string]: number | string | Array<any> } =
      jwtDecode(accessToken);
    this.rolesUser = (payload['roles'] as any[]).map(
      (role: any) => role['name']
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.auth.isLogged();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.auth.isLogged();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const rolesAllowed = (route.data as object)['roles'] as any[];

    return this.rolesUser.some((role) => rolesAllowed.includes(role));
  }
}
