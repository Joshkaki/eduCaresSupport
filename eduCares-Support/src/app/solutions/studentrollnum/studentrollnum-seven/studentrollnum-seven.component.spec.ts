import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumSevenComponent } from './studentrollnum-seven.component';

describe('StudentrollnumSevenComponent', () => {
  let component: StudentrollnumSevenComponent;
  let fixture: ComponentFixture<StudentrollnumSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
