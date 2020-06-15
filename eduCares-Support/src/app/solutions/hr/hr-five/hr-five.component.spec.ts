import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFiveComponent } from './hr-five.component';

describe('HrFiveComponent', () => {
  let component: HrFiveComponent;
  let fixture: ComponentFixture<HrFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
