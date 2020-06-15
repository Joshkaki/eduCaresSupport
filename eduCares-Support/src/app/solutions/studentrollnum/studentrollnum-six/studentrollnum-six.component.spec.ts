import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumSixComponent } from './studentrollnum-six.component';

describe('StudentrollnumSixComponent', () => {
  let component: StudentrollnumSixComponent;
  let fixture: ComponentFixture<StudentrollnumSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
