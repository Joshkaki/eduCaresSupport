import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceThreetComponent } from './finance-threet.component';

describe('FinanceThreetComponent', () => {
  let component: FinanceThreetComponent;
  let fixture: ComponentFixture<FinanceThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
