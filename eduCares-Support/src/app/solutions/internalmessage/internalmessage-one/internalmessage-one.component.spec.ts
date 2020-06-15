import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalmessageOneComponent } from './internalmessage-one.component';

describe('InternalmessageOneComponent', () => {
  let component: InternalmessageOneComponent;
  let fixture: ComponentFixture<InternalmessageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalmessageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalmessageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
