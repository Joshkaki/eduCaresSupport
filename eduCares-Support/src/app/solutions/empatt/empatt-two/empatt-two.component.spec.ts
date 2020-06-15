import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattTwoComponent } from './empatt-two.component';

describe('EmpattTwoComponent', () => {
  let component: EmpattTwoComponent;
  let fixture: ComponentFixture<EmpattTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
