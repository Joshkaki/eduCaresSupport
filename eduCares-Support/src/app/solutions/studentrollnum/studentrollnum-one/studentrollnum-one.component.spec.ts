import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumOneComponent } from './studentrollnum-one.component';

describe('StudentrollnumOneComponent', () => {
  let component: StudentrollnumOneComponent;
  let fixture: ComponentFixture<StudentrollnumOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
