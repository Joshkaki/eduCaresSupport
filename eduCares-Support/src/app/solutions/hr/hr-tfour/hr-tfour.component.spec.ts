import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTfourComponent } from './hr-tfour.component';

describe('HrTfourComponent', () => {
  let component: HrTfourComponent;
  let fixture: ComponentFixture<HrTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
