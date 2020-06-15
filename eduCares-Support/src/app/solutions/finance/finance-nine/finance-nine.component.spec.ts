import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceNineComponent } from './finance-nine.component';

describe('FinanceNineComponent', () => {
  let component: FinanceNineComponent;
  let fixture: ComponentFixture<FinanceNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
