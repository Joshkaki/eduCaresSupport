import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTtwoComponent } from './timetable-ttwo.component';

describe('TimetableTtwoComponent', () => {
  let component: TimetableTtwoComponent;
  let fixture: ComponentFixture<TimetableTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
