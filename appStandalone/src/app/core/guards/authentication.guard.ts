import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  console.log('authenticationGuard');
  console.log(route.data);
  return false;
};
