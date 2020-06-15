import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementEightComponent } from './placement-eight.component';

describe('PlacementEightComponent', () => {
  let component: PlacementEightComponent;
  let fixture: ComponentFixture<PlacementEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
