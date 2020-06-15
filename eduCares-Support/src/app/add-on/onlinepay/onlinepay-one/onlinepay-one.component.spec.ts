import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinepayOneComponent } from './onlinepay-one.component';

describe('OnlinepayOneComponent', () => {
  let component: OnlinepayOneComponent;
  let fixture: ComponentFixture<OnlinepayOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinepayOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinepayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
