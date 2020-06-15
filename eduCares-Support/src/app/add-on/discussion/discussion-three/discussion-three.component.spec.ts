import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionThreeComponent } from './discussion-three.component';

describe('DiscussionThreeComponent', () => {
  let component: DiscussionThreeComponent;
  let fixture: ComponentFixture<DiscussionThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
