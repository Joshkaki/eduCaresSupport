import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableThreeComponent } from './timetable-three.component';

describe('TimetableThreeComponent', () => {
  let component: TimetableThreeComponent;
  let fixture: ComponentFixture<TimetableThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
