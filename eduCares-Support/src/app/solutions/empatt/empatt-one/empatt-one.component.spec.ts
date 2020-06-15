import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattOneComponent } from './empatt-one.component';

describe('EmpattOneComponent', () => {
  let component: EmpattOneComponent;
  let fixture: ComponentFixture<EmpattOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
