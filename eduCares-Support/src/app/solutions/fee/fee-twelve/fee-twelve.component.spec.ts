import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTwelveComponent } from './fee-twelve.component';

describe('FeeTwelveComponent', () => {
  let component: FeeTwelveComponent;
  let fixture: ComponentFixture<FeeTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
