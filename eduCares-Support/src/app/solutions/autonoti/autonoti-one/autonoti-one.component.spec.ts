import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonotiOneComponent } from './autonoti-one.component';

describe('AutonotiOneComponent', () => {
  let component: AutonotiOneComponent;
  let fixture: ComponentFixture<AutonotiOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonotiOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonotiOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
