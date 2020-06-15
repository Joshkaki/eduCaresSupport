import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTenComponent } from './hr-ten.component';

describe('HrTenComponent', () => {
  let component: HrTenComponent;
  let fixture: ComponentFixture<HrTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
