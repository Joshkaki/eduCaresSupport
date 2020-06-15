import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderSevenComponent } from './reminder-seven.component';

describe('ReminderSevenComponent', () => {
  let component: ReminderSevenComponent;
  let fixture: ComponentFixture<ReminderSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
