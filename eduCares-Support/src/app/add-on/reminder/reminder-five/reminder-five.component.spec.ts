import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderFiveComponent } from './reminder-five.component';

describe('ReminderFiveComponent', () => {
  let component: ReminderFiveComponent;
  let fixture: ComponentFixture<ReminderFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
