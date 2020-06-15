import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinepayHomeComponent } from './onlinepay-home.component';

describe('OnlinepayHomeComponent', () => {
  let component: OnlinepayHomeComponent;
  let fixture: ComponentFixture<OnlinepayHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinepayHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinepayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
