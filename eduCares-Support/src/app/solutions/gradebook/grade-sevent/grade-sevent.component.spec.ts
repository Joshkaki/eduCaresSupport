import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSeventComponent } from './grade-sevent.component';

describe('GradeSeventComponent', () => {
  let component: GradeSeventComponent;
  let fixture: ComponentFixture<GradeSeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeSeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
