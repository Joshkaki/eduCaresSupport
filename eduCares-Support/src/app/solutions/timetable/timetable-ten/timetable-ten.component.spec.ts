import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTenComponent } from './timetable-ten.component';

describe('TimetableTenComponent', () => {
  let component: TimetableTenComponent;
  let fixture: ComponentFixture<TimetableTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
