import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSevenComponent } from './fee-seven.component';

describe('FeeSevenComponent', () => {
  let component: FeeSevenComponent;
  let fixture: ComponentFixture<FeeSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
