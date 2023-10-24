import { TestBed } from '@angular/core/testing';

import { AppCdevLibService } from './app-cdev-lib.service';

describe('AppCdevLibService', () => {
  let service: AppCdevLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCdevLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
