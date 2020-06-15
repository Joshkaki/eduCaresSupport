import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableFiveComponent } from './timetable-five.component';

describe('TimetableFiveComponent', () => {
  let component: TimetableFiveComponent;
  let fixture: ComponentFixture<TimetableFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
