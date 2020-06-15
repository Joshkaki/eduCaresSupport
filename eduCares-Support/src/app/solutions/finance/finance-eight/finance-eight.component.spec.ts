import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceEightComponent } from './finance-eight.component';

describe('FinanceEightComponent', () => {
  let component: FinanceEightComponent;
  let fixture: ComponentFixture<FinanceEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
