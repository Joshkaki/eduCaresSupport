import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollFiveComponent } from './poll-five.component';

describe('PollFiveComponent', () => {
  let component: PollFiveComponent;
  let fixture: ComponentFixture<PollFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
