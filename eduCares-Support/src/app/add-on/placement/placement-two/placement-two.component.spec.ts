import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTwoComponent } from './placement-two.component';

describe('PlacementTwoComponent', () => {
  let component: PlacementTwoComponent;
  let fixture: ComponentFixture<PlacementTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
