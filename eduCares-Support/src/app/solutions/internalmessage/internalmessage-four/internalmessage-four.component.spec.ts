import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalmessageFourComponent } from './internalmessage-four.component';

describe('InternalmessageFourComponent', () => {
  let component: InternalmessageFourComponent;
  let fixture: ComponentFixture<InternalmessageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalmessageFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalmessageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
