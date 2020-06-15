import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSevenComponent } from './finance-seven.component';

describe('FinanceSevenComponent', () => {
  let component: FinanceSevenComponent;
  let fixture: ComponentFixture<FinanceSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
