import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattTwelveComponent } from './empatt-twelve.component';

describe('EmpattTwelveComponent', () => {
  let component: EmpattTwelveComponent;
  let fixture: ComponentFixture<EmpattTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpattTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
