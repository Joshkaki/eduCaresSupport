import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableNinetComponent } from './timetable-ninet.component';

describe('TimetableNinetComponent', () => {
  let component: TimetableNinetComponent;
  let fixture: ComponentFixture<TimetableNinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableNinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableNinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
