import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeThreetComponent } from './fee-threet.component';

describe('FeeThreetComponent', () => {
  let component: FeeThreetComponent;
  let fixture: ComponentFixture<FeeThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
