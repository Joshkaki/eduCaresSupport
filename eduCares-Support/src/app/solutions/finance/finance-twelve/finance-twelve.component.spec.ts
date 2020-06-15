import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTwelveComponent } from './finance-twelve.component';

describe('FinanceTwelveComponent', () => {
  let component: FinanceTwelveComponent;
  let fixture: ComponentFixture<FinanceTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
