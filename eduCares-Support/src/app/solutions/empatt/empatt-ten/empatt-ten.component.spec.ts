import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattTenComponent } from './empatt-ten.component';

describe('EmpattTenComponent', () => {
  let component: EmpattTenComponent;
  let fixture: ComponentFixture<EmpattTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
