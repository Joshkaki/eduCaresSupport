import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEightComponent } from './hr-eight.component';

describe('HrEightComponent', () => {
  let component: HrEightComponent;
  let fixture: ComponentFixture<HrEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
