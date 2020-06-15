import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSixComponent } from './timetable-six.component';

describe('TimetableSixComponent', () => {
  let component: TimetableSixComponent;
  let fixture: ComponentFixture<TimetableSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
