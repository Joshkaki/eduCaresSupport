import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThreeComponent } from './event-three.component';

describe('EventThreeComponent', () => {
  let component: EventThreeComponent;
  let fixture: ComponentFixture<EventThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
