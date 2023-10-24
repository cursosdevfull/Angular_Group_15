import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCdevLibComponent } from './app-cdev-lib.component';

describe('AppCdevLibComponent', () => {
  let component: AppCdevLibComponent;
  let fixture: ComponentFixture<AppCdevLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCdevLibComponent]
    });
    fixture = TestBed.createComponent(AppCdevLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
