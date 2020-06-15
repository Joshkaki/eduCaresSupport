import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattSixComponent } from './empatt-six.component';

describe('EmpattSixComponent', () => {
  let component: EmpattSixComponent;
  let fixture: ComponentFixture<EmpattSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
