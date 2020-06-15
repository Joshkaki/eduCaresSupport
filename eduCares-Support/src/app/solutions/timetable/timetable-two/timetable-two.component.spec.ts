import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTwoComponent } from './timetable-two.component';

describe('TimetableTwoComponent', () => {
  let component: TimetableTwoComponent;
  let fixture: ComponentFixture<TimetableTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
