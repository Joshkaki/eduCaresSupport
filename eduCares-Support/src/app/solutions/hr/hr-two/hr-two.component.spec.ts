import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTwoComponent } from './hr-two.component';

describe('HrTwoComponent', () => {
  let component: HrTwoComponent;
  let fixture: ComponentFixture<HrTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
