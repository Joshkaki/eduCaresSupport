import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeNinetComponent } from './grade-ninet.component';

describe('GradeNinetComponent', () => {
  let component: GradeNinetComponent;
  let fixture: ComponentFixture<GradeNinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeNinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeNinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
