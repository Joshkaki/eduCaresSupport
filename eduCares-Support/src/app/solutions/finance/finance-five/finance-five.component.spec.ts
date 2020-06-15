import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFiveComponent } from './finance-five.component';

describe('FinanceFiveComponent', () => {
  let component: FinanceFiveComponent;
  let fixture: ComponentFixture<FinanceFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
