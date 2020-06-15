import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionFiveComponent } from './discussion-five.component';

describe('DiscussionFiveComponent', () => {
  let component: DiscussionFiveComponent;
  let fixture: ComponentFixture<DiscussionFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
