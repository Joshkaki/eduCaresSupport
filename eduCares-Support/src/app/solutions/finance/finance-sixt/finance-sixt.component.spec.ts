import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSixtComponent } from './finance-sixt.component';

describe('FinanceSixtComponent', () => {
  let component: FinanceSixtComponent;
  let fixture: ComponentFixture<FinanceSixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceSixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
