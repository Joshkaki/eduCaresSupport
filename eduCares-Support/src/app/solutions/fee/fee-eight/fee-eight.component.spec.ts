import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeEightComponent } from './fee-eight.component';

describe('FeeEightComponent', () => {
  let component: FeeEightComponent;
  let fixture: ComponentFixture<FeeEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
