import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceOneComponent } from './finance-one.component';

describe('FinanceOneComponent', () => {
  let component: FinanceOneComponent;
  let fixture: ComponentFixture<FinanceOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
