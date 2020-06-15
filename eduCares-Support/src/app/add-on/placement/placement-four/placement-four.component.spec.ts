import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementFourComponent } from './placement-four.component';

describe('PlacementFourComponent', () => {
  let component: PlacementFourComponent;
  let fixture: ComponentFixture<PlacementFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
