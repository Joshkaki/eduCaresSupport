import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFourComponent } from './hr-four.component';

describe('HrFourComponent', () => {
  let component: HrFourComponent;
  let fixture: ComponentFixture<HrFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
