import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementFiveComponent } from './placement-five.component';

describe('PlacementFiveComponent', () => {
  let component: PlacementFiveComponent;
  let fixture: ComponentFixture<PlacementFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
