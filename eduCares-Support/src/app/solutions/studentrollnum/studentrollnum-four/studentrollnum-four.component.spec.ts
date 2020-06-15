import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumFourComponent } from './studentrollnum-four.component';

describe('StudentrollnumFourComponent', () => {
  let component: StudentrollnumFourComponent;
  let fixture: ComponentFixture<StudentrollnumFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
