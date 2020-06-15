import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsFiveComponent } from './sms-five.component';

describe('SmsFiveComponent', () => {
  let component: SmsFiveComponent;
  let fixture: ComponentFixture<SmsFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
