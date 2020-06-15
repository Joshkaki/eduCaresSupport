import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableFourtComponent } from './timetable-fourt.component';

describe('TimetableFourtComponent', () => {
  let component: TimetableFourtComponent;
  let fixture: ComponentFixture<TimetableFourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableFourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableFourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
