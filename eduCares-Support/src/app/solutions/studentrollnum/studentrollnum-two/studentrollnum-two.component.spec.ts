import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumTwoComponent } from './studentrollnum-two.component';

describe('StudentrollnumTwoComponent', () => {
  let component: StudentrollnumTwoComponent;
  let fixture: ComponentFixture<StudentrollnumTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
