import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementSixComponent } from './placement-six.component';

describe('PlacementSixComponent', () => {
  let component: PlacementSixComponent;
  let fixture: ComponentFixture<PlacementSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
