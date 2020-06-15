import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementThreeComponent } from './placement-three.component';

describe('PlacementThreeComponent', () => {
  let component: PlacementThreeComponent;
  let fixture: ComponentFixture<PlacementThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
