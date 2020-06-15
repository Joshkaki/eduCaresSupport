import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableToneComponent } from './timetable-tone.component';

describe('TimetableToneComponent', () => {
  let component: TimetableToneComponent;
  let fixture: ComponentFixture<TimetableToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
