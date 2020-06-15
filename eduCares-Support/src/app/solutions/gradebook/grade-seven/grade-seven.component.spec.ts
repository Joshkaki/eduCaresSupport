import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSevenComponent } from './grade-seven.component';

describe('GradeSevenComponent', () => {
  let component: GradeSevenComponent;
  let fixture: ComponentFixture<GradeSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
