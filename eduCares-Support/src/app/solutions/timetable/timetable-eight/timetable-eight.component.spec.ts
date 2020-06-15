import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableEightComponent } from './timetable-eight.component';

describe('TimetableEightComponent', () => {
  let component: TimetableEightComponent;
  let fixture: ComponentFixture<TimetableEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
