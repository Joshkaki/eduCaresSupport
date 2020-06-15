import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderThreeComponent } from './reminder-three.component';

describe('ReminderThreeComponent', () => {
  let component: ReminderThreeComponent;
  let fixture: ComponentFixture<ReminderThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
