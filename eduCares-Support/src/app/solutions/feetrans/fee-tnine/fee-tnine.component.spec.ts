import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTnineComponent } from './fee-tnine.component';

describe('FeeTnineComponent', () => {
  let component: FeeTnineComponent;
  let fixture: ComponentFixture<FeeTnineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTnineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
