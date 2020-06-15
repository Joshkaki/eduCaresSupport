import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTwoComponent } from './fee-two.component';

describe('FeeTwoComponent', () => {
  let component: FeeTwoComponent;
  let fixture: ComponentFixture<FeeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
