import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattSevenComponent } from './studentatt-seven.component';

describe('StudentattSevenComponent', () => {
  let component: StudentattSevenComponent;
  let fixture: ComponentFixture<StudentattSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
