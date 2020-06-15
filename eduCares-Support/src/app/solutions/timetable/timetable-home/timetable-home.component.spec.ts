import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableHomeComponent } from './timetable-home.component';

describe('TimetableHomeComponent', () => {
  let component: TimetableHomeComponent;
  let fixture: ComponentFixture<TimetableHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
