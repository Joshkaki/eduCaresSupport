import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonotiTwoComponent } from './autonoti-two.component';

describe('AutonotiTwoComponent', () => {
  let component: AutonotiTwoComponent;
  let fixture: ComponentFixture<AutonotiTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonotiTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonotiTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
