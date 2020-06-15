import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderSixComponent } from './reminder-six.component';

describe('ReminderSixComponent', () => {
  let component: ReminderSixComponent;
  let fixture: ComponentFixture<ReminderSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
