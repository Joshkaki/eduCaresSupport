import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattThreeComponent } from './empatt-three.component';

describe('EmpattThreeComponent', () => {
  let component: EmpattThreeComponent;
  let fixture: ComponentFixture<EmpattThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
