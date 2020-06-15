import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattSevenComponent } from './empatt-seven.component';

describe('EmpattSevenComponent', () => {
  let component: EmpattSevenComponent;
  let fixture: ComponentFixture<EmpattSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
