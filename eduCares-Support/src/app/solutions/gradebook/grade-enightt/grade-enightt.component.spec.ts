import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEnighttComponent } from './grade-enightt.component';

describe('GradeEnighttComponent', () => {
  let component: GradeEnighttComponent;
  let fixture: ComponentFixture<GradeEnighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeEnighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeEnighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
