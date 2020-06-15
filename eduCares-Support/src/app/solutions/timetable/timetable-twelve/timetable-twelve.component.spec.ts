import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTwelveComponent } from './timetable-twelve.component';

describe('TimetableTwelveComponent', () => {
  let component: TimetableTwelveComponent;
  let fixture: ComponentFixture<TimetableTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
