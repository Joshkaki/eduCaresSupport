import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipHomeComponent } from './payslip-home.component';

describe('PayslipHomeComponent', () => {
  let component: PayslipHomeComponent;
  let fixture: ComponentFixture<PayslipHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
