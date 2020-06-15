import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalmessageHomeComponent } from './internalmessage-home.component';

describe('InternalmessageHomeComponent', () => {
  let component: InternalmessageHomeComponent;
  let fixture: ComponentFixture<InternalmessageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalmessageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalmessageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
