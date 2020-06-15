import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattNineComponent } from './empatt-nine.component';

describe('EmpattNineComponent', () => {
  let component: EmpattNineComponent;
  let fixture: ComponentFixture<EmpattNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
