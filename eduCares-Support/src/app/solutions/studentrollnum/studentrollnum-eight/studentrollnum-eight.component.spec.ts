import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumEightComponent } from './studentrollnum-eight.component';

describe('StudentrollnumEightComponent', () => {
  let component: StudentrollnumEightComponent;
  let fixture: ComponentFixture<StudentrollnumEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
