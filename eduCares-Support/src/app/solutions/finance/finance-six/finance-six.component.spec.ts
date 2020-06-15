import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSixComponent } from './finance-six.component';

describe('FinanceSixComponent', () => {
  let component: FinanceSixComponent;
  let fixture: ComponentFixture<FinanceSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
