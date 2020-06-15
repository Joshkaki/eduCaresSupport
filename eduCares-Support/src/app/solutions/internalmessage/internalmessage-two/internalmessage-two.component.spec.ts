import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalmessageTwoComponent } from './internalmessage-two.component';

describe('InternalmessageTwoComponent', () => {
  let component: InternalmessageTwoComponent;
  let fixture: ComponentFixture<InternalmessageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalmessageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalmessageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
