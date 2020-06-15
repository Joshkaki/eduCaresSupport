import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipOneComponent } from './payslip-one.component';

describe('PayslipOneComponent', () => {
  let component: PayslipOneComponent;
  let fixture: ComponentFixture<PayslipOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
