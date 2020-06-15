import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSeventComponent } from './finance-sevent.component';

describe('FinanceSeventComponent', () => {
  let component: FinanceSeventComponent;
  let fixture: ComponentFixture<FinanceSeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceSeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
