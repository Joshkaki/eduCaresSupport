import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderTwoComponent } from './reminder-two.component';

describe('ReminderTwoComponent', () => {
  let component: ReminderTwoComponent;
  let fixture: ComponentFixture<ReminderTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
