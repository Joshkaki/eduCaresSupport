import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrNineComponent } from './hr-nine.component';

describe('HrNineComponent', () => {
  let component: HrNineComponent;
  let fixture: ComponentFixture<HrNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
