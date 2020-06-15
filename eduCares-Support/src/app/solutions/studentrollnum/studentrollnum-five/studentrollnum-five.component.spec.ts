import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumFiveComponent } from './studentrollnum-five.component';

describe('StudentrollnumFiveComponent', () => {
  let component: StudentrollnumFiveComponent;
  let fixture: ComponentFixture<StudentrollnumFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
