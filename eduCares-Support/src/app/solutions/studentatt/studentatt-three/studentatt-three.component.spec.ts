import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattThreeComponent } from './studentatt-three.component';

describe('StudentattThreeComponent', () => {
  let component: StudentattThreeComponent;
  let fixture: ComponentFixture<StudentattThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
