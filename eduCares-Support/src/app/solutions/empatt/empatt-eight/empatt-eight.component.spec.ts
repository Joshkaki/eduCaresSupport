import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattEightComponent } from './empatt-eight.component';

describe('EmpattEightComponent', () => {
  let component: EmpattEightComponent;
  let fixture: ComponentFixture<EmpattEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
