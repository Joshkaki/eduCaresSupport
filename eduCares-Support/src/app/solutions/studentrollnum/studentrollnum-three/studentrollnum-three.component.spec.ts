import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnumThreeComponent } from './studentrollnum-three.component';

describe('StudentrollnumThreeComponent', () => {
  let component: StudentrollnumThreeComponent;
  let fixture: ComponentFixture<StudentrollnumThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnumThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnumThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
