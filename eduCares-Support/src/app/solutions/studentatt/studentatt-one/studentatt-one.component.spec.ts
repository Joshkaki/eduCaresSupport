import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattOneComponent } from './studentatt-one.component';

describe('StudentattOneComponent', () => {
  let component: StudentattOneComponent;
  let fixture: ComponentFixture<StudentattOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
