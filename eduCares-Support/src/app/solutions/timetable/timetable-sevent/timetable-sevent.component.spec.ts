import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSeventComponent } from './timetable-sevent.component';

describe('TimetableSeventComponent', () => {
  let component: TimetableSeventComponent;
  let fixture: ComponentFixture<TimetableSeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableSeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableSeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
