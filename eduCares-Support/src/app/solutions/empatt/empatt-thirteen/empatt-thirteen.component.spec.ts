import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattThirteenComponent } from './empatt-thirteen.component';

describe('EmpattThirteenComponent', () => {
  let component: EmpattThirteenComponent;
  let fixture: ComponentFixture<EmpattThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
