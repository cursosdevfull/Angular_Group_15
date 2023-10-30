import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class BookService {
  constructor(private logger: LoggerService) {}

  getBooksAvailable() {
    this.logger.log('Getting books available');
    return ['Angular', 'Docker', 'NodeJS', 'MongoDB', 'Express'];
  }
}
