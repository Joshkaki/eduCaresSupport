import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattSixComponent } from './studentatt-six.component';

describe('StudentattSixComponent', () => {
  let component: StudentattSixComponent;
  let fixture: ComponentFixture<StudentattSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
