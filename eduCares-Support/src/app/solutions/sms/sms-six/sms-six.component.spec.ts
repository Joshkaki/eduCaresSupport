import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSixComponent } from './sms-six.component';

describe('SmsSixComponent', () => {
  let component: SmsSixComponent;
  let fixture: ComponentFixture<SmsSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
