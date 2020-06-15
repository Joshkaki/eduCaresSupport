import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTsevenComponent } from './fee-tseven.component';

describe('FeeTsevenComponent', () => {
  let component: FeeTsevenComponent;
  let fixture: ComponentFixture<FeeTsevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTsevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
