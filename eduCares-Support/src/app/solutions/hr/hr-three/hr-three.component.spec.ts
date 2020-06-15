import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrThreeComponent } from './hr-three.component';

describe('HrThreeComponent', () => {
  let component: HrThreeComponent;
  let fixture: ComponentFixture<HrThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
