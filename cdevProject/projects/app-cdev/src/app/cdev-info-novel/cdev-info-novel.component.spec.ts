import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdevInfoNovelComponent } from './cdev-info-novel.component';

describe('CdevInfoNovelComponent', () => {
  let component: CdevInfoNovelComponent;
  let fixture: ComponentFixture<CdevInfoNovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdevInfoNovelComponent]
    });
    fixture = TestBed.createComponent(CdevInfoNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
