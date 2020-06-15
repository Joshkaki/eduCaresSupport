import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableEighttComponent } from './timetable-eightt.component';

describe('TimetableEighttComponent', () => {
  let component: TimetableEighttComponent;
  let fixture: ComponentFixture<TimetableEighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableEighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableEighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
