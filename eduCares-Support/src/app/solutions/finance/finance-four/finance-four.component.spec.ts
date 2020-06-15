import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFourComponent } from './finance-four.component';

describe('FinanceFourComponent', () => {
  let component: FinanceFourComponent;
  let fixture: ComponentFixture<FinanceFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
