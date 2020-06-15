import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableNineComponent } from './timetable-nine.component';

describe('TimetableNineComponent', () => {
  let component: TimetableNineComponent;
  let fixture: ComponentFixture<TimetableNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
