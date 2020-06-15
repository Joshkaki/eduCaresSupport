import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSevenComponent } from './hr-seven.component';

describe('HrSevenComponent', () => {
  let component: HrSevenComponent;
  let fixture: ComponentFixture<HrSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
