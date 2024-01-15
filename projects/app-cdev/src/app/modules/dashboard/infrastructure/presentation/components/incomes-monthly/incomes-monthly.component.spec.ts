import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesMonthlyComponent } from './incomes-monthly.component';

describe('IncomesMonthlyComponent', () => {
  let component: IncomesMonthlyComponent;
  let fixture: ComponentFixture<IncomesMonthlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomesMonthlyComponent]
    });
    fixture = TestBed.createComponent(IncomesMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
