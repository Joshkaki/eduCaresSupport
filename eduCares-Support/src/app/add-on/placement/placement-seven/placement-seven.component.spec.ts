import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementSevenComponent } from './placement-seven.component';

describe('PlacementSevenComponent', () => {
  let component: PlacementSevenComponent;
  let fixture: ComponentFixture<PlacementSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
