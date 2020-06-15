import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementOneComponent } from './placement-one.component';

describe('PlacementOneComponent', () => {
  let component: PlacementOneComponent;
  let fixture: ComponentFixture<PlacementOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
