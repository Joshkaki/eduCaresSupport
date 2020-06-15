import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceThreeComponent } from './finance-three.component';

describe('FinanceThreeComponent', () => {
  let component: FinanceThreeComponent;
  let fixture: ComponentFixture<FinanceThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
