import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTtwoComponent } from './hr-ttwo.component';

describe('HrTtwoComponent', () => {
  let component: HrTtwoComponent;
  let fixture: ComponentFixture<HrTtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
