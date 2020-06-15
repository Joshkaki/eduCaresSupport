import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTwoComponent } from './event-two.component';

describe('EventTwoComponent', () => {
  let component: EventTwoComponent;
  let fixture: ComponentFixture<EventTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
