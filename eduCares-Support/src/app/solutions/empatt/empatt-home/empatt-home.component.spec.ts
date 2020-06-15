import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattHomeComponent } from './empatt-home.component';

describe('EmpattHomeComponent', () => {
  let component: EmpattHomeComponent;
  let fixture: ComponentFixture<EmpattHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
