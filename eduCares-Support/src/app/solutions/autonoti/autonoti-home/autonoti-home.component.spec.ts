import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonotiHomeComponent } from './autonoti-home.component';

describe('AutonotiHomeComponent', () => {
  let component: AutonotiHomeComponent;
  let fixture: ComponentFixture<AutonotiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonotiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonotiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
