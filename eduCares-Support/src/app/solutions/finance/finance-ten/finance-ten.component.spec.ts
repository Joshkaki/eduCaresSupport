import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTenComponent } from './finance-ten.component';

describe('FinanceTenComponent', () => {
  let component: FinanceTenComponent;
  let fixture: ComponentFixture<FinanceTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
