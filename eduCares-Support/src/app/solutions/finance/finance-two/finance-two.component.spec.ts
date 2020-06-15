import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTwoComponent } from './finance-two.component';

describe('FinanceTwoComponent', () => {
  let component: FinanceTwoComponent;
  let fixture: ComponentFixture<FinanceTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
