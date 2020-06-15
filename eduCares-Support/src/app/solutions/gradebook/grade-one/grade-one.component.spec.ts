import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeOneComponent } from './grade-one.component';

describe('GradeOneComponent', () => {
  let component: GradeOneComponent;
  let fixture: ComponentFixture<GradeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
