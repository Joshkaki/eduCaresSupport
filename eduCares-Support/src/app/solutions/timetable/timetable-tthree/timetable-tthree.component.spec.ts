import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTthreeComponent } from './timetable-tthree.component';

describe('TimetableTthreeComponent', () => {
  let component: TimetableTthreeComponent;
  let fixture: ComponentFixture<TimetableTthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableTthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
