import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceEighttComponent } from './finance-eightt.component';

describe('FinanceEighttComponent', () => {
  let component: FinanceEighttComponent;
  let fixture: ComponentFixture<FinanceEighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceEighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceEighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
