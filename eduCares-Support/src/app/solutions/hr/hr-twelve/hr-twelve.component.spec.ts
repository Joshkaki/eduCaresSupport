import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTwelveComponent } from './hr-twelve.component';

describe('HrTwelveComponent', () => {
  let component: HrTwelveComponent;
  let fixture: ComponentFixture<HrTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
