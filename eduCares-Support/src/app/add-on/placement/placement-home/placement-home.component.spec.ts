import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementHomeComponent } from './placement-home.component';

describe('PlacementHomeComponent', () => {
  let component: PlacementHomeComponent;
  let fixture: ComponentFixture<PlacementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
