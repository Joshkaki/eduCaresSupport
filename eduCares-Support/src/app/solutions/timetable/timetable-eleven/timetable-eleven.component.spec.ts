import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableElevenComponent } from './timetable-eleven.component';

describe('TimetableElevenComponent', () => {
  let component: TimetableElevenComponent;
  let fixture: ComponentFixture<TimetableElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
