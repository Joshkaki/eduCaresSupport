import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrThreetComponent } from './hr-threet.component';

describe('HrThreetComponent', () => {
  let component: HrThreetComponent;
  let fixture: ComponentFixture<HrThreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrThreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrThreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
