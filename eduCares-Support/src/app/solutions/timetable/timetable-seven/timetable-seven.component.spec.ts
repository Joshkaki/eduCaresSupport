import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSevenComponent } from './timetable-seven.component';

describe('TimetableSevenComponent', () => {
  let component: TimetableSevenComponent;
  let fixture: ComponentFixture<TimetableSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
