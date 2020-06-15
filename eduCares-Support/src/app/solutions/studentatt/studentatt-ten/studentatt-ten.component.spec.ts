import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattTenComponent } from './studentatt-ten.component';

describe('StudentattTenComponent', () => {
  let component: StudentattTenComponent;
  let fixture: ComponentFixture<StudentattTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
