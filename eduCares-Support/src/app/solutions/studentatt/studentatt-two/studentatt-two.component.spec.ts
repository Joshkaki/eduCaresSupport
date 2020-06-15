import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattTwoComponent } from './studentatt-two.component';

describe('StudentattTwoComponent', () => {
  let component: StudentattTwoComponent;
  let fixture: ComponentFixture<StudentattTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
