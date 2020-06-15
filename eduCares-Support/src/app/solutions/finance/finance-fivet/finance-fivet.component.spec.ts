import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFivetComponent } from './finance-fivet.component';

describe('FinanceFivetComponent', () => {
  let component: FinanceFivetComponent;
  let fixture: ComponentFixture<FinanceFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
