import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattHomeComponent } from './studentatt-home.component';

describe('StudentattHomeComponent', () => {
  let component: StudentattHomeComponent;
  let fixture: ComponentFixture<StudentattHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
