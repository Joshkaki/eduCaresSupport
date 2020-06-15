import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsThreeComponent } from './sms-three.component';

describe('SmsThreeComponent', () => {
  let component: SmsThreeComponent;
  let fixture: ComponentFixture<SmsThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
