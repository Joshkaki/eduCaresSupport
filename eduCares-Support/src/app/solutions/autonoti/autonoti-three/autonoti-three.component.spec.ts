import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonotiThreeComponent } from './autonoti-three.component';

describe('AutonotiThreeComponent', () => {
  let component: AutonotiThreeComponent;
  let fixture: ComponentFixture<AutonotiThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonotiThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonotiThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
