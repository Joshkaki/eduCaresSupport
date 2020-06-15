import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderEightComponent } from './reminder-eight.component';

describe('ReminderEightComponent', () => {
  let component: ReminderEightComponent;
  let fixture: ComponentFixture<ReminderEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
