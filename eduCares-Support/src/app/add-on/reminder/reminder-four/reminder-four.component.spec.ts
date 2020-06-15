import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderFourComponent } from './reminder-four.component';

describe('ReminderFourComponent', () => {
  let component: ReminderFourComponent;
  let fixture: ComponentFixture<ReminderFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
