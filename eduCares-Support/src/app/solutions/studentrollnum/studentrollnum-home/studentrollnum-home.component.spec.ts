import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumHomeComponent } from './studentrollnum-home.component';

describe('StudentrollnumHomeComponent', () => {
  let component: StudentrollnumHomeComponent;
  let fixture: ComponentFixture<StudentrollnumHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
