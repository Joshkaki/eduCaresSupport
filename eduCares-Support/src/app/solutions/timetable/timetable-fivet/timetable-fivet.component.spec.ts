import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableFivetComponent } from './timetable-fivet.component';

describe('TimetableFivetComponent', () => {
  let component: TimetableFivetComponent;
  let fixture: ComponentFixture<TimetableFivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableFivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableFivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
