import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionTwoComponent } from './discussion-two.component';

describe('DiscussionTwoComponent', () => {
  let component: DiscussionTwoComponent;
  let fixture: ComponentFixture<DiscussionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
