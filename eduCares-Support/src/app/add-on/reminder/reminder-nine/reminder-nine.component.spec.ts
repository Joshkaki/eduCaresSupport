import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderNineComponent } from './reminder-nine.component';

describe('ReminderNineComponent', () => {
  let component: ReminderNineComponent;
  let fixture: ComponentFixture<ReminderNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
