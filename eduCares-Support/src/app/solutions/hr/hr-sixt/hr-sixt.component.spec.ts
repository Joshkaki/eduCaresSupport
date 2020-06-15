import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSixtComponent } from './hr-sixt.component';

describe('HrSixtComponent', () => {
  let component: HrSixtComponent;
  let fixture: ComponentFixture<HrSixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrSixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
