import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEighttComponent } from './hr-eightt.component';

describe('HrEighttComponent', () => {
  let component: HrEighttComponent;
  let fixture: ComponentFixture<HrEighttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEighttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
