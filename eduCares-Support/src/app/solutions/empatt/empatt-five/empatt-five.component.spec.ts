import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattFiveComponent } from './empatt-five.component';

describe('EmpattFiveComponent', () => {
  let component: EmpattFiveComponent;
  let fixture: ComponentFixture<EmpattFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
