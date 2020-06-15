import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFourtComponent } from './finance-fourt.component';

describe('FinanceFourtComponent', () => {
  let component: FinanceFourtComponent;
  let fixture: ComponentFixture<FinanceFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
