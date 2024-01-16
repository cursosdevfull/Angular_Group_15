import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly logger: LoggerService) {}

  get isLogged() {
    this.logger.log('isLogged');
    return true;
  }
}
