import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTwentyComponent } from './timetable-twenty.component';

describe('TimetableTwentyComponent', () => {
  let component: TimetableTwentyComponent;
  let fixture: ComponentFixture<TimetableTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
