import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTfiveComponent } from './hr-tfive.component';

describe('HrTfiveComponent', () => {
  let component: HrTfiveComponent;
  let fixture: ComponentFixture<HrTfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
