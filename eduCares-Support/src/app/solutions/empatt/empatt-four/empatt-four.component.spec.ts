import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattFourComponent } from './empatt-four.component';

describe('EmpattFourComponent', () => {
  let component: EmpattFourComponent;
  let fixture: ComponentFixture<EmpattFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
