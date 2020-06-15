import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTenComponent } from './fee-ten.component';

describe('FeeTenComponent', () => {
  let component: FeeTenComponent;
  let fixture: ComponentFixture<FeeTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
