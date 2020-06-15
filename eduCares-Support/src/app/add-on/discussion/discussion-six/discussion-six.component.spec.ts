import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionSixComponent } from './discussion-six.component';

describe('DiscussionSixComponent', () => {
  let component: DiscussionSixComponent;
  let fixture: ComponentFixture<DiscussionSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
