import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattElevenComponent } from './empatt-eleven.component';

describe('EmpattElevenComponent', () => {
  let component: EmpattElevenComponent;
  let fixture: ComponentFixture<EmpattElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
