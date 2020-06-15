import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeThreeComponent } from './grade-three.component';

describe('GradeThreeComponent', () => {
  let component: GradeThreeComponent;
  let fixture: ComponentFixture<GradeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
