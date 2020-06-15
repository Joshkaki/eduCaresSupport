import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSixtComponent } from './timetable-sixt.component';

describe('TimetableSixtComponent', () => {
  let component: TimetableSixtComponent;
  let fixture: ComponentFixture<TimetableSixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableSixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableSixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
