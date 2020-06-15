import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTfourComponent } from './timetable-tfour.component';

describe('TimetableTfourComponent', () => {
  let component: TimetableTfourComponent;
  let fixture: ComponentFixture<TimetableTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
