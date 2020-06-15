import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTwentyComponent } from './fee-twenty.component';

describe('FeeTwentyComponent', () => {
  let component: FeeTwentyComponent;
  let fixture: ComponentFixture<FeeTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
