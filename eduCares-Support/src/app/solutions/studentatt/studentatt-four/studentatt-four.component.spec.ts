import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattFourComponent } from './studentatt-four.component';

describe('StudentattFourComponent', () => {
  let component: StudentattFourComponent;
  let fixture: ComponentFixture<StudentattFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
