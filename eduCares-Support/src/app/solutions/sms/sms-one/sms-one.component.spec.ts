import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsOneComponent } from './sms-one.component';

describe('SmsOneComponent', () => {
  let component: SmsOneComponent;
  let fixture: ComponentFixture<SmsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
