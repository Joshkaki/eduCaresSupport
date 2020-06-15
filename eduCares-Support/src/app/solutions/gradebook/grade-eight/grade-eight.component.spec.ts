import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEightComponent } from './grade-eight.component';

describe('GradeEightComponent', () => {
  let component: GradeEightComponent;
  let fixture: ComponentFixture<GradeEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
