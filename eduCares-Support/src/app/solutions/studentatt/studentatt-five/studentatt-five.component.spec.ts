import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattFiveComponent } from './studentatt-five.component';

describe('StudentattFiveComponent', () => {
  let component: StudentattFiveComponent;
  let fixture: ComponentFixture<StudentattFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
