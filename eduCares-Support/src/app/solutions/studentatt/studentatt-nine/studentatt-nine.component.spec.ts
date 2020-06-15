import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattNineComponent } from './studentatt-nine.component';

describe('StudentattNineComponent', () => {
  let component: StudentattNineComponent;
  let fixture: ComponentFixture<StudentattNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
