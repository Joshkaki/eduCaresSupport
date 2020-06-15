import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceElevenComponent } from './finance-eleven.component';

describe('FinanceElevenComponent', () => {
  let component: FinanceElevenComponent;
  let fixture: ComponentFixture<FinanceElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
