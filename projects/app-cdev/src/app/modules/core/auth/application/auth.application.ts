import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { StorageApplication } from '../../storage/application/storage.application';
import { Auth } from '../domain/auth';
import { AuthPort } from '../domain/ports/auth.port';
import { AuthAdapter } from '../infrastructure/auth.adapter';

@Injectable()
export class AuthApplication {
  private isUserLoggedIn = false;

  constructor(
    @Inject(AuthAdapter) private readonly adapter: AuthPort,
    private readonly storage: StorageApplication,
    private readonly router: Router
  ) {}

  login(auth: Auth) {
    this.adapter.login(auth).subscribe({
      next: (data) => {
        this.isUserLoggedIn = true;
        this.storage.save('accessToken', data.accessToken);
        this.storage.save('refreshToken', data.refreshToken);
        this.router.navigate(['/course']);
      },
    });
  }

  logout() {
    this.isUserLoggedIn = false;
    this.storage.remove('accessToken');
    this.storage.remove('refreshToken');
    this.router.navigate(['/']);
  }

  getNewAccessToken(refreshToken: string) {
    return this.adapter.getNewAccessToken(refreshToken);
  }

  isLogged() {
    const accessToken = this.storage.get('accessToken') ?? '';
    return this.isUserLoggedIn || !!accessToken;
  }
}
