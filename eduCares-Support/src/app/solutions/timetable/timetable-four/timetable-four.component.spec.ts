import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableFourComponent } from './timetable-four.component';

describe('TimetableFourComponent', () => {
  let component: TimetableFourComponent;
  let fixture: ComponentFixture<TimetableFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
