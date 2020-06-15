import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrOneComponent } from './hr-one.component';

describe('HrOneComponent', () => {
  let component: HrOneComponent;
  let fixture: ComponentFixture<HrOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
