import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderOneComponent } from './reminder-one.component';

describe('ReminderOneComponent', () => {
  let component: ReminderOneComponent;
  let fixture: ComponentFixture<ReminderOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
