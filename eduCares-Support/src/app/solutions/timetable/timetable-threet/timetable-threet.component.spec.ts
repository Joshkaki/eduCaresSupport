import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableThreetComponent } from './timetable-threet.component';

describe('TimetableThreetComponent', () => {
  let component: TimetableThreetComponent;
  let fixture: ComponentFixture<TimetableThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
