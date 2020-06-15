import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipSevenComponent } from './payslip-seven.component';

describe('PayslipSevenComponent', () => {
  let component: PayslipSevenComponent;
  let fixture: ComponentFixture<PayslipSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
