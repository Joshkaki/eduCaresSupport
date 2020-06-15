import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalmessageThreeComponent } from './internalmessage-three.component';

describe('InternalmessageThreeComponent', () => {
  let component: InternalmessageThreeComponent;
  let fixture: ComponentFixture<InternalmessageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalmessageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalmessageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
