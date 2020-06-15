import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollTwoComponent } from './poll-two.component';

describe('PollTwoComponent', () => {
  let component: PollTwoComponent;
  let fixture: ComponentFixture<PollTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
