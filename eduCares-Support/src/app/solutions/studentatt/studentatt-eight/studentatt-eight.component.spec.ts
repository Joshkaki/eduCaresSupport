import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattEightComponent } from './studentatt-eight.component';

describe('StudentattEightComponent', () => {
  let component: StudentattEightComponent;
  let fixture: ComponentFixture<StudentattEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
