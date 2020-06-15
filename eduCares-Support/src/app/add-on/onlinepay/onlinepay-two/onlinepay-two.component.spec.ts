import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinepayTwoComponent } from './onlinepay-two.component';

describe('OnlinepayTwoComponent', () => {
  let component: OnlinepayTwoComponent;
  let fixture: ComponentFixture<OnlinepayTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinepayTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinepayTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
