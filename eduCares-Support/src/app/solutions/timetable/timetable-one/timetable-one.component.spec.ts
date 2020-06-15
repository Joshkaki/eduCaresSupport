import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableOneComponent } from './timetable-one.component';

describe('TimetableOneComponent', () => {
  let component: TimetableOneComponent;
  let fixture: ComponentFixture<TimetableOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
